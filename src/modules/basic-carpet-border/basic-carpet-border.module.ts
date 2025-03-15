import { Module } from '@nestjs/common';
import { BasicCarpetBorder } from './entities/basic-carpet-border.entity';
import { BasicCarpetBorder as BasicCarpetBorderGraphQL } from './domain/basic-carpet-border';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateBasicCarpetBorderInput } from './dto/create-basic-carpet-border.input';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([BasicCarpetBorder])],
      resolvers: [
        {
          EntityClass: BasicCarpetBorder,
          DTOClass: BasicCarpetBorderGraphQL,
          CreateDTOClass: CreateBasicCarpetBorderInput,
        },
      ],
    }),
  ],
})
export class BasicCarpetBorderModule {}
