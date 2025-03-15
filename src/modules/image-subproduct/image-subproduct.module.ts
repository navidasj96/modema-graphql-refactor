import { Module } from '@nestjs/common';
import { ImageSubproductService } from './image-subproduct.service';
import { ImageSubproductResolver } from './image-subproduct.resolver';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { ImageSubproduct } from '@/modules/image-subproduct/entities/image-subproduct.entity';
import { ImageSubproduct as ImageSubproductGraphQL } from '@/modules/image-subproduct/domain/image-subproduct';
import { CreateImageSubproductInput } from '@/modules/image-subproduct/dto/create-image-subproduct.input';

@Module({
  providers: [ImageSubproductResolver, ImageSubproductService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([ImageSubproduct])],
      resolvers: [
        {
          EntityClass: ImageSubproduct,
          DTOClass: ImageSubproductGraphQL,
          CreateDTOClass: CreateImageSubproductInput,
        },
      ],
    }),
  ],
})
export class ImageSubproductModule {}
