package com.prologiccreations.traderssolution.model.data;

import com.prologiccreations.traderssolution.model.super_classes.AuditableEntity;
import com.prologiccreations.traderssolution.model.super_classes.BaseEntity;
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
public class Attachment extends AuditableEntity {
    private String filePath;
    private String fileName;
}
