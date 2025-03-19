import { Field, InputType } from '@nestjs/graphql';
import { Negotiation } from '@/modules/negotiation/domain/negotiation';
import { File } from '@/modules/file/domain/file';

@InputType()
export class CreateFileNegotiationInput {
  @Field()
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
