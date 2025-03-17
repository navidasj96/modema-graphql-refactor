import { Module } from '@nestjs/common';
import { TmpRussiaProductService } from './tmp-russia-product.service';
import { TmpRussiaProductResolver } from './tmp-russia-product.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TmpRussiaProduct } from '@/modules/tmp-russia-product/entities/tmp-russia-product.entity';
import { TmpRussiaProduct as TmpRussiaProductGraphQL } from '@/modules/tmp-russia-product/domain/tmp-russia-product';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateTmpRussiaProductInput } from '@/modules/tmp-russia-product/dto/create-tmp-russia-product.input';

@Module({
  providers: [TmpRussiaProductResolver, TmpRussiaProductService],
  imports: [
    TypeOrmModule.forFeature([TmpRussiaProduct]),
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([TmpRussiaProduct])],
      resolvers: [
        {
          EntityClass: TmpRussiaProduct,
          DTOClass: TmpRussiaProductGraphQL,
          CreateDTOClass: CreateTmpRussiaProductInput,
        },
      ],
    }),
  ],
})
export class TmpRussiaProductModule {}
