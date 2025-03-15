import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class FileNegotiation {
  @IDField(() => ID)
  id: number;

  @Field()
  negotiationId: number;

  @Field()
  fileId: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
