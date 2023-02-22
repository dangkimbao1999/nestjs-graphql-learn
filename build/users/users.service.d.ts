import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from '../database/entities/user.entity';
import { Repository } from 'typeorm';
export declare class UsersService {
  private readonly userRepository;
  constructor(userRepository: Repository<User>);
  create(createUserInput: CreateUserInput): Promise<User>;
  findAll(): Promise<Array<User>>;
  findOne(userId: string): Promise<User>;
  update(userId: string, updateUserInput: UpdateUserInput): Promise<User>;
  remove(userId: string): Promise<User>;
}
