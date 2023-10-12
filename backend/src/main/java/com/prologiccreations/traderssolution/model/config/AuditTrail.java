package com.prologiccreations.traderssolution.model.config;

import com.prologiccreations.traderssolution.model.super_classes.AuditableEntity;
import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class AuditTrail extends AuditableEntity {

    private String timestamp;
    private String actionEventType;
    private String userSystem;
    private String affectedEntity;
    private String iPAddress;
    private String userAgent;
    private String statusOutcome;
    private String additionalMetadata;

}


