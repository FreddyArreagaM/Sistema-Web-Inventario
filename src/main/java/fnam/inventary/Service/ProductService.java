package fnam.inventary.Service;

import fnam.inventary.Model.Product;
import fnam.inventary.Respository.RepositoryProduct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService implements IProductService{

    //Inyecciones por dependencia o autowired también conocida
    @Autowired
    private RepositoryProduct Repositoryproduct;

    //Metodo para obtener todos los productos de la base de datos
    @Override
    public List<Product> getProducts() {
        return this.Repositoryproduct.findAll();
    }

    //Metodo para obtener un producto por medio de un ID
    @Override
    public Product searchProductById(Integer idProducto) {
        Product product =
                this.Repositoryproduct.findById(idProducto).orElse(null);
        return product;
    }

    @Override
    public Product savedProduct(Product producto) {
        //El metodo save dentro hibernate se maneja de 2 formas si el id es diferente de null hace un update
        //Caso contrario si el id igual a null se hace un insert
        return this.Repositoryproduct.save(producto);
    }

    @Override
    public void deleteProduct(Integer idproducto) {
        this.Repositoryproduct.deleteById(idproducto);
    }
}