import { Product } from "../config/product.model";
import { Supplier } from "../config/supplier.model";
import { AuditAbleModel } from "../super-model/auditable.model";
import { Attachment } from "./attachment.model";

export interface Purchase extends AuditAbleModel {
    product?:Product;
    costPrice?:number;
    vat?: number;
    discount?: number;
    quantity?: number;
    weight?: number;
    total?: number;
    supplier?:Supplier;
    purchaseDate?:Date;
    attachments?:Attachment;
}