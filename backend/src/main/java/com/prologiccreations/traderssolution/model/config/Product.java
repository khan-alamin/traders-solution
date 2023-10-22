package com.prologiccreations.traderssolution.model.config;

import com.prologiccreations.traderssolution.model.super_classes.AuditableEntity;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@Entity
public class Product extends AuditableEntity {
    private String name;
    private String sku;
    private String category;
    private String brand;
    private double unitPrice;
    private double costPrice;
    private Number quantityInStock;
    private String reorderPoint;
    private int supplierID;
    private LocalDate purchaseDate;
    private LocalDate expirationDate;
    private String location;
    private String barcode;
    private Number serialNumber;
    private String condition;
    private double weight;
    private double dimensions;
    private double taxRate;
    private Number minimumOrderQuantity;
    private double discounts;
    private String images;
    private String attachments;
}
