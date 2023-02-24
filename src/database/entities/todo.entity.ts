import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity()
@ObjectType()
export class Todo {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String, { description: 'id of the todo' })
  id: string;

  @Column()
  @Field()
  title: string;

  @Column()
  @Field()
  content: string;

  @Column({ type: 'varchar', length: 500, nullable: true })
  updated_by?: string;

  @CreateDateColumn({ type: 'timestamptz', nullable: true })
  created_at?: string;

  @ManyToOne(() => User, (user) => user.todos)
  @Field(() => User)
  user: User;
}
