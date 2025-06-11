import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class GeneralResponseDto {
  @Field()
  message: string;
  @Field()
  status: boolean;
}
