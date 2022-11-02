package com.bitech.myecommerce;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;


@CrossOrigin
@Repository
@RepositoryRestResource(path = "productos" , collectionResourceRel = "productos")
public interface ProductoRepository extends JpaRepository<Producto, Integer> {

}
