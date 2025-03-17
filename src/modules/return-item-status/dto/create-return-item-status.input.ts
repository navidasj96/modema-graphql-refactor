import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateReturnItemStatusInput {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  stepTest?: number;

  @Field({ nullable: true })
  stepGuarantee?: number;

  @Field()
  sortOrder: number;

  @Field()
  isActive: boolean;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
