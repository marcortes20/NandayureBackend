import { CreateRequestsStateDto } from '../dto/create-requests-state.dto';

export const defaultRequestStateData: CreateRequestsStateDto[] = [
  { Name: 'Pendiente' },
  { Name: 'En Proceso' },
  { Name: 'Rechazada' },
  { Name: 'Aprobada' },
];
