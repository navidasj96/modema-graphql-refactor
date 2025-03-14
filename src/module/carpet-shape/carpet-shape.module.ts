import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CarpetShape } from './entities/carpet-shape.entity';
import { CarpetShape as CarpetShapeGraphQL } from './domain/carpet-shape';
import { CreateCarpetShapeInput } from './dto/create-carpet-shape.input';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([CarpetShape])],
      resolvers: [
        {
          EntityClass: CarpetShape,
          DTOClass: CarpetShapeGraphQL,
          CreateDTOClass: CreateCarpetShapeInput,
        },
      ],
    }),
  ],
})
export class CarpetShapeModule {}
