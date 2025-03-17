import { Module } from '@nestjs/common';
import { SubproductSpecialImageService } from './subproduct-special-image.service';
import { SubproductSpecialImageResolver } from './subproduct-special-image.resolver';
import { SubproductSpecialImage } from '@/modules/subproduct-special-image/entities/subproduct-special-image.entity';
import { SubproductSpecialImage as SubproductSpecialImageGraphQL } from '@/modules/subproduct-special-image/domain/subproduct-special-image';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateSubproductSpecialImageInput } from '@/modules/subproduct-special-image/dto/create-subproduct-special-image.input';

@Module({
  providers: [SubproductSpecialImageResolver, SubproductSpecialImageService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([SubproductSpecialImage])],
      resolvers: [
        {
          EntityClass: SubproductSpecialImage,
          DTOClass: SubproductSpecialImageGraphQL,
          CreateDTOClass: CreateSubproductSpecialImageInput,
        },
      ],
    }),
  ],
})
export class SubproductSpecialImageModule {}
