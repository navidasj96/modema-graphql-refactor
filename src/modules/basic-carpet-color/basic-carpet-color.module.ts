import { Module } from '@nestjs/common';

import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateBasicCarpetColorInput } from './dto/create-basic-carpet-color.input';
import { BasicCarpetColor as BasicCarpetColorGraphQL } from './domain/basic-carpet-color';
import { BasicCarpetColor } from './entities/basic-carpet-color.entity';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([BasicCarpetColor])],
      resolvers: [
        {
          EntityClass: BasicCarpetColor,
          DTOClass: BasicCarpetColorGraphQL,
          CreateDTOClass: CreateBasicCarpetColorInput,
        },
      ],
    }),
  ],
})
export class BasicCarpetColorModule {}
