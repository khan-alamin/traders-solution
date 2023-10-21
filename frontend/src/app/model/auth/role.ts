import { ApprovableEntity } from "../super-model/approvable.model";
import { Permission } from "./permission";

export interface Role extends ApprovableEntity {
    name?: string;
    permissions?: Permission[];
}