package fnam.inventary.Controller;
import fnam.inventary.Exception.RecursoNoEncontradoExcepcion;
import fnam.inventary.Model.Product;
import fnam.inventary.Service.ProductService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
//localhost:8080/inventario-app
@RequestMapping("inventario-app")

//Este es el permiso que permite realizar las peticiones desde un determinado frontend
@CrossOrigin(value = "https://inventary-app.netlify.app")

public class ControllerProduct {

    private static final Logger logger =
            LoggerFactory.getLogger(ControllerProduct.class);

    @Autowired
    private ProductService productoServicio;

    //http://localhost:8080/inventario-app/productos
    //Metodo para obtener lista de productos
    @GetMapping("/products")
    public List<Product> getProducts(){
        List<Product> productos = this.productoServicio.getProducts();
        logger.info("Productos obtenidos");
        productos.forEach((producto -> logger.info(producto.toString())));
        return productos;
    }

    //Metodo para realizar un save o update respectivo
    @PostMapping("/saved-product")
    public Product savedProduct(@RequestBody Product producto){
        logger.info("Producto a agregar: " + producto);
        return this.productoServicio.savedProduct(producto);
    }

    @GetMapping("/product/{id}")
    public ResponseEntity<Product> getProductByID(@PathVariable int id) {
        Product producto = this.productoServicio.searchProductById(id);
        if(producto != null){
            return ResponseEntity.ok(producto);
        }
        else{
            throw new RecursoNoEncontradoExcepcion("No se encontro el id " + id);
        }
    }

    @PutMapping("/update-product/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable int id, @RequestBody Product productoRecibido) {
        //Obtenemos la información de la base de datos como medida de Verificación de su existencia.
        Product producto = this.productoServicio.searchProductById(id);
        if(producto == null){
            throw new RecursoNoEncontradoExcepcion("No se encontró el producto con id: " + id);
        }else{
            producto.setDescripcion(productoRecibido.getDescripcion());
            producto.setPrecio(productoRecibido.getPrecio());
            producto.setExistencia(productoRecibido.getExistencia());
            this.productoServicio.savedProduct(producto);
            return ResponseEntity.ok(producto);
        }
    }

    @DeleteMapping("/delete-product/{id}")
    //Devuelve un Map que sería una cadena de respuesta, y el boolean para manejarlo en el cliente
    public ResponseEntity<Map<String, Boolean>> deleteProduct(@PathVariable int id){
        //Obtenemos la información de la base de datos como medida de Verificación de su existencia.
        Product producto = this.productoServicio.searchProductById(id);
        if( producto == null){
            throw new RecursoNoEncontradoExcepcion("No se encontró el producto con id: " + id);
        }else{
            this.productoServicio.deleteProduct(producto.getIdProducto());
            Map<String, Boolean> respuesta = new HashMap<>();
            respuesta.put("Eliminado", Boolean.TRUE);
            return ResponseEntity.ok(respuesta);
        }

    }
}
