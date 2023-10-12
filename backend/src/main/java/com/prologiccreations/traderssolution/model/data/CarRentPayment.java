package com.prologiccreations.traderssolution.model.data;

import com.prologiccreations.traderssolution.model.config.Employee;
import com.prologiccreations.traderssolution.model.super_classes.ApprovableEntity;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalTime;

@Getter
@Setter
@Entity
public class CarRentPayment extends ApprovableEntity {
    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.REFRESH)
    private VehicleRequisition vehicleRequisition;
    private LocalDate visitDate;
    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.REFRESH)
    private Employee employee;
    private LocalTime startTime;
    private String vehicleName;
    private String supplierName;
    private double amount;
    private String remarks;
}
