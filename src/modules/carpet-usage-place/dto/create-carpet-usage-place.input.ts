import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateCarpetUsagePlaceInput {
  @Field()
  id: number;

  @Field()
  title: string;

  @Field({ nullable: true })
  sortOrder?: number;

  @Field({ defaultValue: true })
  isActive: boolean;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
