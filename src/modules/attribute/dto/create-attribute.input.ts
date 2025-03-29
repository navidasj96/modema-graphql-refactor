import { Field, InputType } from '@nestjs/graphql';

@InputType('CreateAttributeInput')
export class CreateAttributeInput {
  @Field()
  name: string;

  @Field()
  type: number;

  @Field({ nullable: true })
  sortOrder?: number;

  @Field({ nullable: true })
  isActive?: number;
}
