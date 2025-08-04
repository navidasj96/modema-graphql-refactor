import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('ProductionReceiptTypePureDomain')
@ObjectType()
export class ProductionReceiptTypePure {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
