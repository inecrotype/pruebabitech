package com.bitech.myecommerce;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
@Entity
public class Producto {


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer Id;
    private String nombre;
    private String descripcion;
    private Integer stock;
    private Float precio;



}
