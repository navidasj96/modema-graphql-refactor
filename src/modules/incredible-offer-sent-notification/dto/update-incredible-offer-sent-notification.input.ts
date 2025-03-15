import { CreateIncredibleOfferSentNotificationInput } from './create-incredible-offer-sent-notification.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateIncredibleOfferSentNotificationInput extends PartialType(CreateIncredibleOfferSentNotificationInput) {
  @Field(() => Int)
  id: number;
}
