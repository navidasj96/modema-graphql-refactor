import { Module } from '@nestjs/common';
import { ReturnRequestItemImageService } from './return-request-item-image.service';
import { ReturnRequestItemImageResolver } from './return-request-item-image.resolver';
import { ReturnRequestItemImage } from '@/modules/return-request-item-image/entities/return-request-item-image.entity';
import { ReturnRequestItemImage as ReturnRequestItemImageGraphQL } from '@/modules/return-request-item-image/domain/return-request-item-image';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateReturnRequestItemImageInput } from '@/modules/return-request-item-image/dto/create-return-request-item-image.input';

@Module({
  providers: [ReturnRequestItemImageResolver, ReturnRequestItemImageService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([ReturnRequestItemImage])],
      resolvers: [
        {
          EntityClass: ReturnRequestItemImage,
          DTOClass: ReturnRequestItemImageGraphQL,
          CreateDTOClass: CreateReturnRequestItemImageInput,
        },
      ],
    }),
  ],
})
export class ReturnRequestItemImageModule {}
