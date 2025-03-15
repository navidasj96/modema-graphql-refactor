import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { DiscountNotification } from './entities/discount-notification.entity';
import { DiscountNotification as DiscountNotificationGraphQL } from './domain/discount-notification';
import { CreateDiscountNotificationInput } from './dto/create-discount-notification.input';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([DiscountNotification])],
      resolvers: [
        {
          EntityClass: DiscountNotification,
          DTOClass: DiscountNotificationGraphQL,
          CreateDTOClass: CreateDiscountNotificationInput,
        },
      ],
    }),
  ],
})
export class DiscountNotificationModule {}
