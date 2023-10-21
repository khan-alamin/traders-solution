import { AuditAbleModel } from "../super-model/auditable.model";

export interface Attachment extends AuditAbleModel {
    filePath?: string;
    fileName?: string;

}