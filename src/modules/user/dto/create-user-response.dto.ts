import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CreateUserResponseDto {
  @Field()
  id: number;

  @Field()
  name: string;
}
