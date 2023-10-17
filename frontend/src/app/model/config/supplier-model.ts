import { AuditAbleModel } from "../super-model/audit-able-model";

export interface Supplier extends AuditAbleModel {
    name?:string;
    contactName?:string;
    contactTitle?:string;
    phoneNumber?:number;
    emailAddress?:string;
    address?:string;
    billingAddress?:string;
    paymentTerms?:string;
    paymentMethod?:string;
    tin?:string;
    website?:string;
    productCategories?:string;
    supplierRating?:string;
    agreements?:string;
    preferredSupplier?:string;
    leadTime?:number;
    minimumOrderQuantity?:number;
}