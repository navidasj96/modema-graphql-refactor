import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { BasicCarpetDesigner } from './entities/basic-carpet-designer.entity';
import { CreateBasicCarpetDesignerInput } from './dto/create-basic-carpet-designer.input';
import { BasicCarpetDesigner as BasicCarpetDesignerGraphQl } from './domain/basic-carpet-designer';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([BasicCarpetDesigner])],
      resolvers: [
        {
          EntityClass: BasicCarpetDesigner,
          DTOClass: BasicCarpetDesignerGraphQl,
          CreateDTOClass: CreateBasicCarpetDesignerInput,
        },
      ],
    }),
  ],
})
export class BasicCarpetDesignerModule {}
