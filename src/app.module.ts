import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MysqlConfig } from './config/config';

@Module({
  imports: [TypeOrmModule.forRoot(MysqlConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
