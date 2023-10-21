import { AuditAbleModel } from "../super-model/auditable.model";

export interface Product extends AuditAbleModel {
    name?:string;
    sku?:string;
    category?:string;
    brand?:string;
    unitPrice?:number;
    costPrice?: number;
    quantityInStock?: number;
    reorderPoint?:string;
    supplierID?:number;
    purchaseDate?:Date;
    expirationDate?:Date;
    location?:string;
    barcode?:string;
    serialNumber?: number;
    condition?:string;
    weight?: number;
    dimensions?: number;
    taxRate?: number;
    minimumOrderQuantity?: number;
    discounts?: number;
    images?:string;
    attachments?:string;
}