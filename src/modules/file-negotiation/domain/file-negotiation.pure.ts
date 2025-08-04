import { FilePure } from '@/modules/file/domain/file.pure';
import { NegotiationPure } from '@/modules/negotiation/domain/negotiation.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('FileNegotiationPureDomain')
@ObjectType()
export class FileNegotiationPure {
  @Field(() => ID)
  id: number;

  @Field()
  negotiationId: number;

  @Field()
  fileId: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => FilePure)
  file: FilePure;

  @Field(() => NegotiationPure)
  negotiation: NegotiationPure;
}
