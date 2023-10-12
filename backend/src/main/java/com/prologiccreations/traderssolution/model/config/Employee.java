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
    private String nationalId;
    //    Contact Information:
    private String email;
    private String phone;
    private String address;
    //    Emergency Contact Information:
    private String emergencyContactName;
    private String emergencyContactPhone;
    //    Employment Information:
    private LocalDate hireDate;
    private String designation;
    private String department;
    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.REFRESH)
    private Employee manager;
    private String employeeStatus;
    //    Salary and Compensation:
    private String salary;
    private String payFrequency;
    private String payRate;
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
    private String terminationDate;
    private String reasonForTermination;
    @Transient
    private Team team;
}
