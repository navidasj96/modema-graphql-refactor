import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { Border } from './entities/border.entity';
import { Border as BorderGraphQL } from './domain/border';
import { CreateBorderInput } from './dto/create-border.input';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Border])],
      resolvers: [
        {
          EntityClass: Border,
          DTOClass: BorderGraphQL,
          CreateDTOClass: CreateBorderInput,
        },
      ],
    }),
  ],
})
export class BorderModule {}
