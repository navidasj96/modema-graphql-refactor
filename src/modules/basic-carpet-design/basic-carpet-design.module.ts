import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { BasicCarpetDesign } from './entities/basic-carpet-design.entity';
import { BasicCarpetDesign as BasicCarpetDesignGraphQL } from './domain/basic-carpet-design';
import { CreateBasicCarpetDesignInput } from './dto/create-basic-carpet-design.input';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([BasicCarpetDesign])],
      resolvers: [
        {
          EntityClass: BasicCarpetDesign,
          DTOClass: BasicCarpetDesignGraphQL,
          CreateDTOClass: CreateBasicCarpetDesignInput,
        },
      ],
    }),
  ],
})
export class BasicCarpetDesignModule {}
