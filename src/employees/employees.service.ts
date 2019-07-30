import { Injectable, HttpService } from '@nestjs/common';
import { ConfigService } from 'src/config/config.service';

@Injectable()
export class EmployeesService {

  constructor(private readonly http: HttpService, private config: ConfigService) {
  }

  public async getEmployeesProxy(): Promise<Employees[]> {
    const urlEmployees = this.config.get('EMPLOYEES_URL');

    const headersRequest = {
      'Content-Type': 'application/json'
    };

    const response = await this.http.get(`${urlEmployees}/api/v1/employees`, { headers: headersRequest }).toPromise();
    const users: Employees[] = response.data.results.map(user => ({
      userKey: user.userKey,
      displayName: user.displayName,
      username: user.username
    }));

    return users;
  }

  create(employees: Employees) {
  }
}
