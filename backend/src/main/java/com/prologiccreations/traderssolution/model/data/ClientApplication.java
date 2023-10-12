package com.prologiccreations.traderssolution.model.data;

import com.prologiccreations.traderssolution.constants.enums.SalesMode;
import com.prologiccreations.traderssolution.constants.enums.PaymentType;
import com.prologiccreations.traderssolution.model.config.Employee;
import com.prologiccreations.traderssolution.model.super_classes.ApprovableEntity;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@Entity
public class ClientApplication extends ApprovableEntity {
    @Column(name = "fileNo")
    private String fileNo;
    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.REFRESH)
    @Column(name = "applicant")
    private Client applicant;
    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.REFRESH)
    @Column(name = "plotDetails")
    private Plot plotDetails;
    @Enumerated(EnumType.STRING)
    @Column(name = "salesMode")
    private SalesMode salesMode;
    @Column(name = "bookingMoney")
    private double bookingMoney;
    @Column(name = "bookingPayMedia")
    private String bookingPayMedia;
    @Column(name = "payment")
    private String payment;
    @Column(name = "bookingPayDate")
    private LocalDate bookingPayDate;
    @Column(name = "bank")
    private String bank;
    @Column(name = "branch")
    private String branch;
    @Enumerated(EnumType.STRING)
    @Column(name = "paymentType")
    private PaymentType paymentType;
    @Column(name = "paymentPercentage")
    private double paymentPercentage;
    @Column(name = "paymentAmount")
    private double paymentAmount;
    @Column(name = "paymentDate")
    private LocalDate paymentDate;
    @Column(name = "noOfInstallment")
    private int noOfInstallment;
    @Column(name = "installmentAmount")
    private double installmentAmount;
    @Column(name = "installmentStartDate")
    private LocalDate installmentStartDate;
    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.REFRESH)
    @JoinColumn(name = "seller")
    private Employee seller;
    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.REFRESH)
    @JoinColumn(name = "authorizedBy")
    private Employee authorizedBy;
}
