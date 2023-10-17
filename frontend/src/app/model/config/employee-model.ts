import { AuditAbleModel } from "../super-model/audit-able-model";

export interface EmployeeModel extends AuditAbleModel {
    firstName?:string;
    lastName?:string;
    dateOfBirth?:string;
    gender?:string;
    nationalId?:string;
    email?:string;
    phone?:string;
    address?:string;
    emergencyContactName?:string;
    emergencyContactPhone?:string;
    hireDate?:string;
    designation?:string;
    department?:string;
    manager?:string;
    employeeStatus?:string;
    salary?:string;
    payFrequency?:string;
    payRate?:string;
    healthInsurance?:string;
    retirementPlans?:string;
    otherBenefits?:string;
    performanceReviews?:string;
    trainingRecords?:string;
    certifications?:string;
    terminationDate?:string;
    reasonForTermination?:string;
    team?:string;
}