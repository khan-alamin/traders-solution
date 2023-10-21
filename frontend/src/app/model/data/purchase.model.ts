import { AuditAbleModel } from "../super-model/auditable.model";

export interface Purchase extends AuditAbleModel {
    product?:string;
    costPrice?:number;
    vat?: number;
    discount?: number;
    quantity?: number;
    weight?: number;
    total?: number;
    supplier?:string;
    purchaseDate?:Date;
    attachments?:string;
}