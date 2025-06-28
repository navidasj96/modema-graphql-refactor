import { Module } from '@nestjs/common';

import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateBasicCarpetColorInput } from './dto/create-basic-carpet-color.input';
import { BasicCarpetColor as BasicCarpetColorGraphQL } from './domain/basic-carpet-color';
import { BasicCarpetColor } from './entities/basic-carpet-color.entity';
import { BasicCarpetColorService } from '@/modules/basic-carpet-color/basic-carpet-color.service';

@Module({
  providers: [BasicCarpetColorService],
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
  exports: [BasicCarpetColorService],
})
export class BasicCarpetColorModule {}
