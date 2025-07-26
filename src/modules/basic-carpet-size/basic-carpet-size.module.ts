import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { BasicCarpetSize } from './entities/basic-carpet-size.entity';
import { BasicCarpetSize as BasicCarpetSizeGraphQL } from './domain/basic-carpet-size';
import { CreateBasicCarpetSizeInput } from './dto/create-basic-carpet-size.input';
import { BasicCarpetSizeService } from '@/modules/basic-carpet-size/basic-carpet-size.service';
import { BasicCarpetSizeResolver } from '@/modules/basic-carpet-size/basic-carpet-size.resolver';

@Module({
  providers: [BasicCarpetSizeService, BasicCarpetSizeResolver],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([BasicCarpetSize])],
      resolvers: [
        {
          EntityClass: BasicCarpetSize,
          DTOClass: BasicCarpetSizeGraphQL,
          CreateDTOClass: CreateBasicCarpetSizeInput,
        },
      ],
    }),
  ],
  exports: [BasicCarpetSizeService],
})
export class BasicCarpetSizeModule {}
