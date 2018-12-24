import { Module } from '../../lib/modules/module.inversify';
import { UsersService } from './users.service';
import { UsersHandler } from './users.handler';
import {CoreModule} from '../core/core.module';
import {UsersFilter} from './users.filter';

@Module({
  imports: [CoreModule],
  services: [UsersService, UsersFilter],
  handlers: [UsersHandler]
})
export class UsersModule {}