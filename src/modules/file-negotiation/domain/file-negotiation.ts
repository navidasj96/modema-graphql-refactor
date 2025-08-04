import { File } from '@/modules/file/domain/file';
import { Negotiation } from '@/modules/negotiation/domain/negotiation';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@InputType('FileNegotiationDomain')
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
