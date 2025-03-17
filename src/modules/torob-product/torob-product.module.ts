import { Module } from '@nestjs/common';
import { TorobProductService } from './torob-product.service';
import { TorobProductResolver } from './torob-product.resolver';
import { TorobProduct } from '@/modules/torob-product/entities/torob-product.entity';
import { TorobProduct as TorobProductGraphQL } from '@/modules/torob-product/domain/torob-product';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateTorobProductInput } from '@/modules/torob-product/dto/create-torob-product.input';

@Module({
  providers: [TorobProductResolver, TorobProductService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([TorobProduct])],
      resolvers: [
        {
          EntityClass: TorobProduct,
          DTOClass: TorobProductGraphQL,
          CreateDTOClass: CreateTorobProductInput,
        },
      ],
    }),
  ],
})
export class TorobProductModule {}
