import { Test, TestingModule } from '@nestjs/testing';
import { AttendanceStatusService } from './attendance-status.service';

describe('AttendanceStatusService', () => {
  let service: AttendanceStatusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AttendanceStatusService],
    }).compile();

    service = module.get<AttendanceStatusService>(AttendanceStatusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
