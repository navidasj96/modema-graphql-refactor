import { File } from '@/modules/file/domain/file';
import { Negotiation } from '@/modules/negotiation/domain/negotiation';
import { Field, InputType } from '@nestjs/graphql';

@InputType('CreateFileNegotiationInput')
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
