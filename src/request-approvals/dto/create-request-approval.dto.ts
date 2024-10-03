export class CreateRequestApprovalDto {
  approverId: string; //Person who acept or reject the request

  requesterId: string; // Person who make the request

  current?: boolean;

  processNumber: number;

  approved?: boolean;

  RequestId: number;

  ApprovedDate?: Date;

  observation?: string;
}
