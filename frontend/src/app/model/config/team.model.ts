import { AuditAbleModel } from "../super-model/auditable.model";

export interface Team extends AuditAbleModel {
    name?:string;
    leader?:string;
    members?:number;
}