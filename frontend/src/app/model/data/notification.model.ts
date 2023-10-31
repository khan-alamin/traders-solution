import { BaseModel } from "../super-model/base.model";

export interface Notification extends BaseModel {
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
