package fnam.inventary.Service;

import fnam.inventary.Model.Product;
import java.util.List;

public interface IProductService {
    public List<Product> getProducts();
    public Product searchProductById(Integer idProduct);
    public Product savedProduct(Product product);
    public void deleteProduct(Integer idProduct);
}
