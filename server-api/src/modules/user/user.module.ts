import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { LoggerModule } from '../../libs/logger/logger.module';
import { LoggerService } from '../../libs/logger/logger.service';
import { DbManagerService } from 'src/libs/db-manager/db-manager.service';

@Module({
  imports: [LoggerModule],
  providers: [UserService, LoggerService, DbManagerService],
  controllers: [UserController],
})
export class UserModule {}
