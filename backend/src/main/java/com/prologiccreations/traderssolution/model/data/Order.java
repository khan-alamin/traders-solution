package com.prologiccreations.traderssolution.model.data;

import com.prologiccreations.traderssolution.model.super_classes.AuditableEntity;
import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@Entity
public class Order extends AuditableEntity {
    private LocalDate OrderDate;
    private String customer;
    private String employee;
    private String paymentMethod;
    private String paymentDate;
    private String shippingAddress;
    private String billingAddress;
    private String orderStatus;
    private String totalAmount;
    private String taxAmount;
    private String discountAmount;
    private String shippingFee;
    private String invoiceReceiptNumber;
    private String notesComments;
    private String deliveryDate;
    private String returnExchangeRequest;
    private String returnExchangeDate;
}
