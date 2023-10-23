package com.prologiccreations.traderssolution.model.config;

import com.prologiccreations.traderssolution.model.super_classes.AuditableEntity;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@Entity
public class Employee extends AuditableEntity {
    private String firstName;
    private String lastName;
    private LocalDate dateOfBirth;
    private String gender;
    private Number nationalId;
    //    Contact Information:
    private String email;
    private Number phone;
    private String address;
    //    Emergency Contact Information:
    private String emergencyContactName;
    private Number emergencyContactPhone;
    //    Employment Information:
    private LocalDate hireDate;
    private String designation;
    private String department;
    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.REFRESH)
    private Employee manager;
    private String employeeStatus;
    //    Salary and Compensation:
    private double salary;
    private double payFrequency;
    private double payRate;
    //    Benefits Information:
    private String healthInsurance;
    private String retirementPlans;
    private String otherBenefits;
//    Performance and Reviews:
    private String[] performanceReviews;
//    Training and Certifications:
    private String trainingRecords;
    private String certifications;
//    Termination Information:
    private LocalDate terminationDate;
    private String reasonForTermination;
    @Transient
    private Team team;
}
