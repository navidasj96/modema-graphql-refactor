import { Field, InputType } from '@nestjs/graphql';

@InputType('CreateTmpTagChangesPrintInput')
export class CreateTmpTagChangesPrintInput {
  @Field()
  id: number;

  @Field({ nullable: true })
  size?: string;

  @Field({ nullable: true })
  code?: string;

  @Field({ nullable: true })
  count?: number;

  @Field({ nullable: true })
  oldCode?: string;
}
