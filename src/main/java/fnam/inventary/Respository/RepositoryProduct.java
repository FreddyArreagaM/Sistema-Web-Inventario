package fnam.inventary.Respository;

import fnam.inventary.Model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RepositoryProduct extends JpaRepository<Product, Integer> {

}
