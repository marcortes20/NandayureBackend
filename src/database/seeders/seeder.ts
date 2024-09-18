import { Injectable, Logger } from '@nestjs/common';
import { JobPositionsSeederService } from './job-positions/job-positions..service';

@Injectable()
export class Seeder {
  constructor(
    private readonly logger: Logger,
    private readonly jobPositionsSeederService: JobPositionsSeederService,
  ) {}

  async seed() {
    await this.jobPositions()
      .then((completed) => {
        this.logger.debug('Successfully completed seeding job positions...');
        Promise.resolve(completed);
      })
      .catch((error) => {
        this.logger.error('Failed seeding job positions...');
        Promise.reject(error);
      });
  }

  async jobPositions() {
    return await Promise.all(this.jobPositionsSeederService.create())
      .then((createdJobPositions) => {
        // Can also use this.logger.verbose('...');
        this.logger.debug(
          'No. of job positions created: ' +
            // Remove all null values and return only created job positions.
            createdJobPositions.filter(
              (nullValueOrCreatedJobPosition) => nullValueOrCreatedJobPosition,
            ).length,
        );
        return Promise.resolve(true);
      })
      .catch((error) => Promise.reject(error));
  }
}
