/* eslint-disable prettier/prettier */

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MysqlConfig } from './config/config';
import { Entities } from './model/entities';
import { AdressController } from "./model/controller/AdressController";
import { AdressService } from "./model/service/AdressService";
import { AdressRpository } from "./model/repository/AdressRpository";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...MysqlConfig,
      entities: Entities,
      synchronize: true,
      autoLoadEntities: true,
    }),
  ],
  controllers: [AppController, AdressController],
  providers: [AppService, AdressService, AdressRpository],
})
export class AppModule {}
