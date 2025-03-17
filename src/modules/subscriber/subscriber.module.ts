import { Module } from '@nestjs/common';
import { SubscriberService } from './subscriber.service';
import { SubscriberResolver } from './subscriber.resolver';
import { Subscriber } from '@/modules/subscriber/entities/subscriber.entity';
import { Subscriber as SubscriberGraphQL } from '@/modules/subscriber/domain/subscriber';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateSubscriberInput } from '@/modules/subscriber/dto/create-subscriber.input';

@Module({
  providers: [SubscriberResolver, SubscriberService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Subscriber])],
      resolvers: [
        {
          EntityClass: Subscriber,
          DTOClass: SubscriberGraphQL,
          CreateDTOClass: CreateSubscriberInput,
        },
      ],
    }),
  ],
})
export class SubscriberModule {}
