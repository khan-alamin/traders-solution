package com.prologiccreations.traderssolution.model.data;

import com.prologiccreations.traderssolution.model.config.Employee;
import com.prologiccreations.traderssolution.model.super_classes.AuditableEntity;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@Entity
public class Order extends AuditableEntity {
    private LocalDate OrderDate;
    private String customer;
    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.REFRESH)
    private Employee employee;
    private String paymentMethod;
    private LocalDate paymentDate;
    private String shippingAddress;
    private String billingAddress;
    private String orderStatus;
    private double totalAmount;
    private double taxAmount;
    private double discountAmount;
    private double shippingFee;
    private int invoiceReceiptNumber;
    private String notesComments;
    private LocalDate deliveryDate;
    private String returnExchangeRequest;
    private LocalDate returnExchangeDate;
}
