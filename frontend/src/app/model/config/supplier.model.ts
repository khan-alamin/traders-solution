import { AuditAbleModel } from "../super-model/auditable.model";

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
    tin?:number;
    website?:string;
    productCategories?:string;
    supplierRating?:string;
    agreements?:string;
    preferredSupplier?:boolean;
    leadTime?:number;
    minimumOrderQuantity?:number;
}