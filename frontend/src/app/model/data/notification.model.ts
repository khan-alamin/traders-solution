import { AuditAbleModel } from "../super-model/auditable.model";

export interface Notification extends AuditAbleModel {
    recipient?:string;
    message?:string;
    notificationType?:string;
    timestamp?:string;
    status?:string;
    linkURL?:string;
    associatedEntity?:string;
    senderUserID?:string;
    priorityLevel?:string;
    readTimestamp?:string;
    expirationDate?:Date;
    additionalMetadata?:string;
}