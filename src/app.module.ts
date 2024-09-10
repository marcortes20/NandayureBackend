import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
//import { User } from './users/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
//import { Role } from './roles/entities/role.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CacheModule } from '@nestjs/cache-manager';

//import { MailClientModule } from './mail-client/mail-client.module';
import { EmployeesModule } from './employees/employees.module';
import { MaritalStatusModule } from './marital-status/marital-status.module';

import { GendersModule } from './genders/genders.module';
import { MunicipalityModule } from './municipality/municipality.module';
import { JobPositionsModule } from './job-positions/job-positions.module';
import { TrainingsModule } from './trainings/trainings.module';
import { EmbargoesModule } from './embargoes/embargoes.module';
import { AnnuitiesModule } from './annuities/annuities.module';
import { OvertimesModule } from './overtimes/overtimes.module';
import { AttendanceModule } from './attendance/attendance.module';
import { AttendanceStatusModule } from './attendance-status/attendance-status.module';
import { StudiesModule } from './studies/studies.module';
import { StudiesCategoryModule } from './studies-category/studies-category.module';
import { RequestsModule } from './requests/requests.module';
import { RequestsStateModule } from './requests-state/requests-state.module';
import { RequestVacationModule } from './request-vacation/request-vacation.module';
import { RequestSalaryCertificatesModule } from './request-salary-certificates/request-salary-certificates.module';
import { RequestPaymentConfirmationsModule } from './request-payment-confirmations/request-payment-confirmations.module';
import { LaborCodeRegulationsModule } from './labor-code-regulations/labor-code-regulations.module';
import { FinancialInstitutionsModule } from './financial-institutions/financial-institutions.module';
import { TypeFinancialInstitutionsModule } from './type-financial-institutions/type-financial-institutions.module';
import { DepartmentsModule } from './departments/departments.module';
import { DepartmentProgramsModule } from './department-programs/department-programs.module';
import { BudgetCodesModule } from './budget-codes/budget-codes.module';
import { TypeBudgetCodesModule } from './type-budget-codes/type-budget-codes.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
      expandVariables: true,
    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule], // Importa ConfigModule aquí
      inject: [ConfigService], // Inyecta ConfigService
      useFactory: async (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        synchronize: true,
        autoLoadEntities: true,
        logging: true,
      }),
    }),
    CacheModule.register({ isGlobal: true }),
    AuthModule,
    UsersModule,
    EmployeesModule,
    MaritalStatusModule,
    GendersModule,
    MunicipalityModule,
    JobPositionsModule,
    TrainingsModule,
    EmbargoesModule,
    AnnuitiesModule,
    OvertimesModule,
    AttendanceModule,
    AttendanceStatusModule,
    StudiesModule,
    StudiesCategoryModule,
    RequestsModule,
    RequestsStateModule,
    RequestVacationModule,
    RequestSalaryCertificatesModule,
    RequestPaymentConfirmationsModule,
    LaborCodeRegulationsModule,
    FinancialInstitutionsModule,
    TypeFinancialInstitutionsModule,
    DepartmentsModule,
    DepartmentProgramsModule,
    BudgetCodesModule,
    TypeBudgetCodesModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
