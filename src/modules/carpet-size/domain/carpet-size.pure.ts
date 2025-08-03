import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('CarpetSizePureDomain')
@ObjectType()
export class CarpetSize {
  @Field(() => ID)
  id: number;

  @Field()
  width: number;

  @Field()
  length: number;

  @Field({ nullable: true })
  sortOrder?: number;

  @Field({ defaultValue: true })
  isActive: boolean;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
