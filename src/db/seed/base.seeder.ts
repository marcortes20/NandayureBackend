import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import MunicipalitySeeder from 'src/municipality/seed/municipality.seeder';
import RoleSeeder from 'src/roles/seed/roles.seeder';
import GenderSeeder from 'src/genders/seed/gender.seeder';
import MaritalStatusSeeder from 'src/marital-status/seed/maritalStatus.seeder';
import BudgetCodeSeeder from 'src/budget-codes/seed/codes.seeder';
import DepartmentProgramSeeder from 'src/department-programs/seed/programs.seeder';
import DepartmentSeeder from 'src/departments/seed/departments.seeder';
import JobPositionSeeder from 'src/job-positions/seed/jobPosition.seeder';
import EmployeeSeeder from 'src/employees/seeds/employee.seeder';
import UserSeeder from 'src/users/seed/users.seeder';

export default class BaseSeeder implements Seeder {
  public async run(dataSource: DataSource): Promise<void> {
    const municipalitySedder = new MunicipalitySeeder();
    const roleSedder = new RoleSeeder();
    const genderSeeder = new GenderSeeder();
    const maritalStatusSeeder = new MaritalStatusSeeder();
    const budgetCodeSeeder = new BudgetCodeSeeder();
    const departmentProgramSeeder = new DepartmentProgramSeeder();
    const department = new DepartmentSeeder();
    const jobPositionSeeder = new JobPositionSeeder();
    const employeeSeeder = new EmployeeSeeder();
    const userSeeder = new UserSeeder();

    await municipalitySedder.run(dataSource);
    await roleSedder.run(dataSource);
    await genderSeeder.run(dataSource);
    await maritalStatusSeeder.run(dataSource);
    await budgetCodeSeeder.run(dataSource);
    await departmentProgramSeeder.run(dataSource);
    await department.run(dataSource);
    await jobPositionSeeder.run(dataSource);
    await employeeSeeder.run(dataSource);
    await userSeeder.run(dataSource);
  }
}
