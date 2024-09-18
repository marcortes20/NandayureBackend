import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JobPosition } from 'src/job-positions/entities/job-position.entity';
import { IJobPosition } from 'src/job-positions/interfaces/job-position.interface';
import { JobPositions } from 'src/database/seeders/job-positions/data';

/**
 * Service dealing with job position based operations.
 *
 * @class
 */
@Injectable()
export class JobPositionsSeederService {
  /**
   * Create an instance of class.
   *
   * @constructs
   *
   * @param {Repository<JobPosition>} jobPositionRepository
   */
  constructor(
    @InjectRepository(JobPosition)
    private readonly jobPositionRepository: Repository<JobPosition>,
  ) {}

  /**
   * Seed all job positions.
   *
   * @function
   */
  create(): Array<Promise<JobPosition>> {
    return JobPositions.map(async (jobPosition: IJobPosition) => {
      return await this.jobPositionRepository
        .findOne({ where: { Name: jobPosition.Name } })
        .then(async (dbJobPosition) => {
          // We check if a job position already exists.
          // If it does, don't create a new one.
          if (dbJobPosition) {
            return Promise.resolve(null);
          }
          return Promise.resolve(
            await this.jobPositionRepository.save(jobPosition),
          );
        })
        .catch((error) => Promise.reject(error));
    });
  }
}
