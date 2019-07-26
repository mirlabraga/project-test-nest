import { Injectable, Get } from '@nestjs/common';

@Injectable()
export class CatsService {

  findAll(): any {
    return "cats";
  }
}
