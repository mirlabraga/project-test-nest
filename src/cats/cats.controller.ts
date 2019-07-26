import { Controller, Get } from '@nestjs/common';
import { CatsService } from 'src/cats/cats.service';

@Controller('cats')
export class CatsController {

  constructor(private readonly catsService: CatsService) { }

  @Get()
  async findAll(): Promise<any> {
    return this.catsService.findAll();
  }
}
