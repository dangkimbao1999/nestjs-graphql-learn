import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Todo } from './todo.entity';

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String, { description: 'id of the user' })
  userId: string;
  @Column()
  @Field(() => String, { description: 'first name of the user' })
  firstName: string;
  @Column()
  @Field(() => String, { description: 'last name of the user' })
  lastName: string;
  @Column()
  @Field(() => String, { description: 'email of the user' })
  email: string;
  @Column({ nullable: true })
  @Field(() => String, { description: 'role of the user' })
  role: string;

  @Column()
  @Field()
  password: string;

  @ManyToOne(() => Todo, (todo) => todo.user)
  @Field(() => [Todo])
  todos: Todo[];
}
