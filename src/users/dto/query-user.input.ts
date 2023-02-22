import { CreateUserInput } from './create-user.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class QueryUserInput extends PartialType(CreateUserInput) {
  @Field(() => Number)
  page: number;

  @Field(() => Number)
  limit: number;
}
