import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { Negotiation } from '@/modules/negotiation/domain/negotiation';
import { File } from '@/modules/file/domain/file';

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

  @Field(() => File)
  file: File;

  @Field(() => Negotiation)
  negotiation: Negotiation;
}
