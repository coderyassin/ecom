package org.yascode.inventoryservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.yascode.inventoryservice.entity.Product;

public interface ProductRepository extends JpaRepository<Product, String> {
}
