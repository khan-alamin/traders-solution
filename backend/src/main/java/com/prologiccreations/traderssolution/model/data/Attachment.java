package com.prologiccreations.traderssolution.model.data;

import com.prologiccreations.traderssolution.model.super_classes.AuditableEntity;
import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Attachment extends AuditableEntity {
    private String fileName;
    private String filePath;
}
