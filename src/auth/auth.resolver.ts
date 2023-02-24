import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { CreateUserInput } from './../users/dto/create-user.input';
import { AuthService } from './auth.service';
import { SigninInput } from './dto/signin.input';
import { SigninResponse } from './dto/signin.response';
import { SignupResponse } from './dto/signup.response';
import { GqlAuthGuard } from './guards/gql-auth.guard';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => SignupResponse)
  async signup(
    @Args('loginUserInput') loginUserInput: CreateUserInput,
  ): Promise<SignupResponse> {
    return this.authService.signup(loginUserInput);
  }

  @Mutation(() => SigninResponse)
  @UseGuards(GqlAuthGuard)
  async signin(
    @Args('loginUserInput') loginUserInput: SigninInput,
    @Context() context,
  ): Promise<SigninResponse> {
    return this.authService.signin(context.user);
  }
}
