package com.prologiccreations.traderssolution.model.data;

import com.prologiccreations.traderssolution.model.config.Product;
import com.prologiccreations.traderssolution.model.super_classes.AuditableEntity;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class OrderItem extends AuditableEntity {
    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.REFRESH)
    private Product product;
    private double quantity;
    private double amount;
}
