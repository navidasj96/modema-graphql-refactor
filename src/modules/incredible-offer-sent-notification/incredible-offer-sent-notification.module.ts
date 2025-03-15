import { Module } from '@nestjs/common';
import { IncredibleOfferSentNotificationService } from './incredible-offer-sent-notification.service';
import { IncredibleOfferSentNotificationResolver } from './incredible-offer-sent-notification.resolver';
import { IncredibleOfferSentNotification } from '@/modules/incredible-offer-sent-notification/entities/incredible-offer-sent-notification.entity';
import { IncredibleOfferSentNotification as IncredibleOfferSentNotificationGraphQL } from '@/modules/incredible-offer-sent-notification/domain/incredible-offer-sent-notification';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateIncredibleOfferSentNotificationInput } from '@/modules/incredible-offer-sent-notification/dto/create-incredible-offer-sent-notification.input';

@Module({
  providers: [
    IncredibleOfferSentNotificationResolver,
    IncredibleOfferSentNotificationService,
  ],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [
        NestjsQueryTypeOrmModule.forFeature([IncredibleOfferSentNotification]),
      ],
      resolvers: [
        {
          EntityClass: IncredibleOfferSentNotification,
          DTOClass: IncredibleOfferSentNotificationGraphQL,
          CreateDTOClass: CreateIncredibleOfferSentNotificationInput,
        },
      ],
    }),
  ],
})
export class IncredibleOfferSentNotificationModule {}
