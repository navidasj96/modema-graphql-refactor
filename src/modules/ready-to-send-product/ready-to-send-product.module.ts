import { Module } from '@nestjs/common';
import { ReadyToSendProductService } from './ready-to-send-product.service';
import { ReadyToSendProductResolver } from './ready-to-send-product.resolver';
import { ReadyToSendProduct } from '@/modules/ready-to-send-product/entities/ready-to-send-product.entity';
import { ReadyToSendProduct as ReadyToSendProductGraphQL } from '@/modules/ready-to-send-product/domain/ready-to-send-product';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateReadyToSendProductInput } from '@/modules/ready-to-send-product/dto/create-ready-to-send-product.input';

@Module({
  providers: [ReadyToSendProductResolver, ReadyToSendProductService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([ReadyToSendProduct])],
      resolvers: [
        {
          EntityClass: ReadyToSendProduct,
          DTOClass: ReadyToSendProductGraphQL,
          CreateDTOClass: CreateReadyToSendProductInput,
        },
      ],
    }),
  ],
})
export class ReadyToSendProductModule {}
