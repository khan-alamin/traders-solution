import { Employee } from "../config/employee.model";
import { AuditAbleModel } from "../super-model/auditable.model";

export interface Order extends AuditAbleModel {
    OrderDate?:Date;
    customer?:string;
    employee?:Employee;
    paymentMethod?:string;
    paymentDate?:Date;
    shippingAddress?:string;
    billingAddress?:string;
    orderStatus?:string;
    totalAmount?:number;
    taxAmount?:number;
    discountAmount?:number;
    shippingFee?:number;
    invoiceReceiptNumber?:number;
    notesComments?:string;
    deliveryDate?:Date;
    returnExchangeRequest?:string;
    returnExchangeDate?:Date;
}