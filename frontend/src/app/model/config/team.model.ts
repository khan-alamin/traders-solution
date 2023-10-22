import { AuditAbleModel } from "../super-model/auditable.model";
import { EmployeeModel } from "./employee.model";

export interface Team extends AuditAbleModel {
    name?:string;
    leader?:EmployeeModel;
    members?:EmployeeModel;
}