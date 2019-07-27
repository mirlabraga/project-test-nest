import { Injectable, Get } from '@nestjs/common';
import { Cat } from 'src/cats/cat';

@Injectable()
export class CatsService {

  private readonly cats: Cat[] = [];

  findAll(): any {
    return this.cats;
  }

  create(cat: Cat) {
    this.cats.push(cat);
  }

}
