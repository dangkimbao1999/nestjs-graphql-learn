import { Field, InputType } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class SigninInput {
  @Field()
  @IsString()
  username: string;

  @Field()
  @IsString()
  password: string;
}
