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
    private String unitPrice;
    private String costPrice;
    private String quantityInStock;
    private String reorderPoint;
    private String supplierID;
    private String purchaseDate;
    private String expirationDate;
    private String location;
    private String barcode;
    private String serialNumber;
    private String condition;
    private String weight;
    private String dimensions;
    private String taxRate;
    private String minimumOrderQuantity;
    private String discounts;
    private String images;
    private String attachments;
}
