import { AuditAbleModel } from "../super-model/auditable.model";
import { Employee } from "./employee.model";

export interface Team extends AuditAbleModel {
    name?:string;
    leader?:Employee;
    members?:Employee;
}