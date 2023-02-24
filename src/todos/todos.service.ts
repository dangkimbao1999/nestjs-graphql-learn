import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from 'src/database/entities/todo.entity';
import { User } from 'src/database/entities/user.entity';
import { Repository } from 'typeorm';
import { createTodoInput } from './dto/create-todo.input';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo) private readonly todoRepository: Repository<Todo>,
  ) {}

  async getAllTodo(user): Promise<Todo[]> {
    const todos = await this.todoRepository.find({ where: { user } });
    if (!todos) throw new InternalServerErrorException();
    return todos;
  }

  async createTodo(
    createTodoInput: createTodoInput,
    user: User,
  ): Promise<Todo> {
    const todo = createTodoInput;

    const newTodo = this.todoRepository.create({
      title: todo.title,
      content: todo.content,
      user,
    });
    try {
      await this.todoRepository.save(newTodo);
      return newTodo;
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }
}
