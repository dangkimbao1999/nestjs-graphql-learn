import {
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
// import { User } from './../database/entities/user.entity';
import { Repository } from 'typeorm';
import { SigninInput } from './dto/signin.input';
import { SignupResponse } from './dto/signup.response';
import * as bcrypt from 'bcrypt';
import { UsersService } from './../users/users.service';
import { CreateUserInput } from './../users/dto/create-user.input';
import { User } from 'src/database/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { SigninResponse } from './dto/signin.response';

@Injectable()
export class AuthService {
  constructor(
    // @InjectRepository(User)
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async signup(loginUserInput: CreateUserInput): Promise<SignupResponse> {
    const salt = await bcrypt.genSalt();
    const hasedPass = await bcrypt.hash(loginUserInput.password, salt);
    loginUserInput.password = hasedPass;
    return this.usersService.create(loginUserInput);
  }

  async validateUser(email: string, password: string): Promise<User> {
    const user = await this.usersService.findOneByEmail(email);
    if (user && (await bcrypt.compare(password, user.password))) {
      delete user.password;
      return user;
    }
    throw new UnauthorizedException();
  }

  async signin(user: User): Promise<SigninResponse> {
    const email = user.email;
    const accessToken = await this.jwtService.sign({ email, sub: user.userId });
    if (!accessToken) {
      throw new InternalServerErrorException();
    }
    return {
      accessToken,
      email,
    };
  }
}
