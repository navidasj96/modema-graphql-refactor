import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class Design {
  @IDField(() => ID)
  id: number;

  @Field({ nullable: true })
  userId?: number;

  @Field({ nullable: true, defaultValue: 1 })
  carpetShapeId?: number;

  @Field({ nullable: true })
  carpetMaterialId?: number;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true, defaultValue: '#FFFFFF' })
  backgroundColor?: string;

  @Field({ nullable: true, defaultValue: '#FFFFFF' })
  borderColor?: string;

  @Field({ nullable: true, defaultValue: '#FFFFFF' })
  fringeColor?: string;

  @Field({ nullable: true, defaultValue: 0.0 })
  width?: number;

  @Field({ nullable: true, defaultValue: 0.0 })
  length?: number;

  @Field({ nullable: true, defaultValue: '/' })
  path?: string;

  @Field({ nullable: true })
  filename?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field({ nullable: true })
  deletedAt?: Date;
}
