import { User } from '../auth/user.model';
import { AuditAbleModel } from '../super-model/auditable.model';
import { Team } from './team.model';

export interface Employee extends AuditAbleModel {
  firstName?: string;
  lastName?: string;
  dateOfBirth?: Date;
  gender?: string;
  nationalId?: number;
  email?: string;
  phone?: number;
  address?: string;
  emergencyContactName?: string;
  emergencyContactPhone?: number;
  hireDate?: Date;
  designation?: string;
  department?: string;
 // user?: User;
  manager?: Employee;
  employeeStatus?: string;
  salary?: number;
  payFrequency?: number;
  payRate?: number;
  healthInsurance?: string;
  retirementPlans?: string;
  otherBenefits?: string;
  performanceReview?: string;
  trainingRecords?: string;
  certifications?: string;
  terminationDate?: Date;
  reasonForTermination?: string;
  team?: Team;
}
