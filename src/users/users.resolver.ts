import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from '../database/entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { QueryUserInput } from './dto/query-user.input';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CurrentUser } from 'src/decorators/get-current-user.decorator';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.usersService.create(createUserInput);
  }

  @Query(() => [User], { name: 'users' })
  @UseGuards(JwtAuthGuard)
  findAll(@CurrentUser() user: User) {
    console.log(user);
    return this.usersService.findAll();
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args('userId', { type: () => String }) userId: string) {
    return this.usersService.findOne(userId);
  }

  /*
  query{
  queryUser(queryUserInput:{
    role: "CUSTOMER"
    page: 1
    limit: 1
  }){
    userId
    firstName
    lastName
    email
    role
  }
}*/
  @Query(() => [User], { name: 'queryUser' })
  queryResult(@Args('queryUserInput') queryUserInput: QueryUserInput) {
    return this.usersService.findAndCount(
      queryUserInput.page,
      queryUserInput.limit,
      queryUserInput.role,
    );
  }

  @Mutation(() => User)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.usersService.update(updateUserInput.userId, updateUserInput);
  }

  @Mutation(() => User)
  removeUser(@Args('userId', { type: () => String }) userId: string) {
    return this.usersService.remove(userId);
  }
}
