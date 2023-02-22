import { UsersService } from './users.service';
import { User } from '../database/entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
export declare class UsersResolver {
  private readonly usersService;
  constructor(usersService: UsersService);
  createUser(createUserInput: CreateUserInput): Promise<User>;
  findAll(): Promise<User[]>;
  findOne(userId: string): Promise<User>;
  updateUser(updateUserInput: UpdateUserInput): Promise<User>;
  removeUser(userId: string): Promise<User>;
}
