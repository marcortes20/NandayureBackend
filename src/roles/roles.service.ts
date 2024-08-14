import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
//import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
    private dataSource: DataSource,
  ) {}

  async onModuleInit() {
    const defaultRoles: CreateRoleDto[] = [
      {
        RoleName: 'USER',
      },
      {
        RoleName: 'TI',
      },
      {
        RoleName: 'RH',
      },
      {
        RoleName: 'ADMIN',
      },
    ];

    for (const role of defaultRoles) {
      try {
        await this.create(role);
      } catch (error) {
        console.error(`Error creating role ${role.RoleName}:`, error.message);
      }
    }
  }

  async create(createRoleDto: CreateRoleDto) {
    try {
      const roleToSave = await this.findOneByName(createRoleDto.RoleName);
      if (roleToSave) {
        return { message: 'Role already exists', role: roleToSave };
      }
      const newRole = this.roleRepository.create(createRoleDto);
      return this.roleRepository.save(newRole);
    } catch (error) {
      console.error('Error:', error);
      // Manejo de cualquier otra excepción no prevista
      throw new InternalServerErrorException({
        message: 'Error en el inicio de sesión: ' + error.message,
      });
    }
  }

  async findAll() {
    return `This action returns all roles`;
  }

  async findOneByName(RoleName: string) {
    return this.roleRepository.findOneBy({ RoleName });
  }

  // update(id: number, updateRoleDto: UpdateRoleDto) {
  //   return `This action updates a #${id} role`;
  // }

  async remove(id: number) {
    return `This action removes a #${id} role`;
  }

  // async createDefaultRoles(rolesNames: string[]) {
  //   const queryRunner = this.dataSource.createQueryRunner();
  //   await queryRunner.connect();
  //   await queryRunner.startTransaction();

  //   for()

  //   try {
  //     await queryRunner.manager.save(rolesNames[0]);
  //     await queryRunner.manager.save(rolesNames[1]);

  //     await queryRunner.commitTransaction();
  //   } catch (err) {
  //     // since we have errors lets rollback the changes we made
  //     await queryRunner.rollbackTransaction();
  //   } finally {
  //     // you need to release a queryRunner which was manually instantiated
  //     await queryRunner.release();
  //   }
  // }
}
