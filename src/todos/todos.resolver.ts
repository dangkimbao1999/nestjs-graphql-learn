import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Todo } from 'src/database/entities/todo.entity';
import { User } from 'src/database/entities/user.entity';
import { CurrentUser } from 'src/decorators/get-current-user.decorator';
import { createTodoInput } from './dto/create-todo.input';
import { TodosService } from './todos.service';

@Resolver(() => Todo)
export class TodosResolver {
  constructor(private todoService: TodosService) {}

  @Query(() => [Todo], { name: 'todos' })
  async getAllTodos(@CurrentUser() user: User): Promise<Todo[]> {
    return this.todoService.getAllTodo(user);
  }

  @Mutation(() => Todo, { name: 'createTodo' })
  async createTodo(
    @Args('createTodoInput') createTodoInput: createTodoInput,
    @CurrentUser() user: any,
  ): Promise<Todo> {
    return this.todoService.createTodo(createTodoInput, user);
  }
}
