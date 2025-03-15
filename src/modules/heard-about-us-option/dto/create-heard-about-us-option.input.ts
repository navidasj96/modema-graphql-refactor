import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateHeardAboutUsOptionInput {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field({ defaultValue: 1 })
  sortOrder: number;

  @Field({ defaultValue: true })
  isActive: boolean;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
