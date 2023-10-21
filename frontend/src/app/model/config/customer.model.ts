import { AuditAbleModel } from "../super-model/auditable.model";

export interface Customer extends AuditAbleModel {
    firstName?:string;
    lastName?:string;
    email?:string;
    phone?:Number;
    address?:string;
    billingAddress?:string;
    companyName?:string;
    tin?:string;
    dateOfRegistration?:Date;
    customerCategory?:string;
    creditLimit ?:string;
}