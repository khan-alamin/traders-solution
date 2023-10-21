import { BaseModel } from "./base.model";

export interface ApprovableEntity extends BaseModel {
    isApproved?: boolean;
    approvedBy?: string;
    denialReason?: string;
    approvedAt?: Date;
}