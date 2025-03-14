import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { BasicCarpetSizeDetail } from './entities/basic-carpet-size-detail.entity';
import { BasicCarpetSizeDetail as BasicCarpetSizeDetailGraphQL } from './domain/basic-carpet-size-detail';
import { CreateBasicCarpetSizeDetailInput } from './dto/create-basic-carpet-size-detail.input';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([BasicCarpetSizeDetail])],
      resolvers: [
        {
          EntityClass: BasicCarpetSizeDetail,
          DTOClass: BasicCarpetSizeDetailGraphQL,
          CreateDTOClass: CreateBasicCarpetSizeDetailInput,
        },
      ],
    }),
  ],
})
export class BasicCarpetSizeDetailModule {}
