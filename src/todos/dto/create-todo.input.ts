import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class createTodoInput {
  @Field(() => String, { description: 'first name of the user' })
  title: string;
  @Field(() => String, { description: 'last name of the user' })
  content: string;
}
