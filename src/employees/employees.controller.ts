import { Controller, Get, Post } from '@nestjs/common';
import { EmployeesService } from 'src/employees/employees.service';

@Controller('employees')
export class EmployeesController {

  constructor(private readonly employeesService: EmployeesService) { }

  @Get()
  async findAll(): Promise<any> {
    return this.employeesService.getEmployeesProxy();
  }

  @Post()
  async create(employees: Employees) {
    return this.employeesService.create(employees);
  }

}
