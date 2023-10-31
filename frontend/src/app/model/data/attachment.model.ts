import { AuditAbleModel } from "../super-model/auditable.model";

export interface Attachment extends AuditAbleModel {
    fileName?: string;
    filePath?: string;

}
