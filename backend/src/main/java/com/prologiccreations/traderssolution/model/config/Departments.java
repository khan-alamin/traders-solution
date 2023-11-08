package com.prologiccreations.traderssolution.model.config;

import com.prologiccreations.traderssolution.model.super_classes.AuditableEntity;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.OneToOne;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Departments extends AuditableEntity {
    private String name;
    @OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.REFRESH)
    private Employee manager;
    private String location;
}
