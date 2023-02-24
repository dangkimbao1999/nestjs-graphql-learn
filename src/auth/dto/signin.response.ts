import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class SigninResponse {
  @Field()
  email: string;
  @Field()
  accessToken: string;
}
