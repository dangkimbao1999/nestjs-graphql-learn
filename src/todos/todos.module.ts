import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from 'src/database/entities/todo.entity';
import { User } from 'src/database/entities/user.entity';
import { UsersModule } from 'src/users/users.module';
import { UsersService } from 'src/users/users.service';
import { TodosResolver } from './todos.resolver';
import { TodosService } from './todos.service';

@Module({
  providers: [TodosResolver, TodosService],
  imports: [TypeOrmModule.forFeature([Todo, User])],
  exports: [TodosService],
})
export class TodosModule {}
