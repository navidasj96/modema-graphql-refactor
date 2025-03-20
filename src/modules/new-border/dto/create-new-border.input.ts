import { Field, InputType } from '@nestjs/graphql';

@InputType('CreateNewBorderInput')
export class CreateNewBorderInput {
  @Field()
  id: number;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  newBorder?: string;

  @Field({ nullable: true })
  oldBorder?: string;

  @Field({ nullable: true })
  color?: string;

  @Field({ nullable: true })
  sizes?: string;

  @Field({ nullable: true })
  material?: string;

  @Field({ nullable: true })
  designer?: string;

  @Field({ nullable: true })
  design?: string;

  @Field({ nullable: true })
  brand?: string;

  @Field({ nullable: true })
  type?: string;
}
