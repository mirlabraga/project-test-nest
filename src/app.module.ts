import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';
import { CatsModule } from './cats/cats.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CatSchema } from 'schemas/cat.schema';
import { ConfigModule } from 'src/config/config.module';
import { EmployeesController } from './employees/employees.controller';
import { EmployeesService } from './employees/employees.service';

@Module({
  imports: [CatsModule, ConfigModule, MongooseModule.forRoot('mongodb://127.0.0.1:27017/test'),
    MongooseModule.forFeature([{ name: 'Cat', schema: CatSchema }]),
    MongooseModule.forFeature([{ name: 'Employees', schema: CatSchema }])],
  controllers: [AppController, CatsController, EmployeesController],
  providers: [AppService, CatsService, EmployeesService],
})
export class AppModule { }
