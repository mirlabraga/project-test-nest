import { Controller, Get, Post } from '@nestjs/common';
import { CatsService } from 'src/cats/cats.service';
import { Cat } from 'src/cats/cat';

@Controller('cats')
export class CatsController {

  constructor(private readonly catsService: CatsService) { }

  @Get()
  async findAll(): Promise<any> {
    return this.catsService.findAll();
  }

  @Post()
  async create(cat: Cat) {
    return this.catsService.create(cat);
  }
}
