import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UpdateUserResponseDto {
  @Field()
  id: number;

  @Field()
  name: string;
}
