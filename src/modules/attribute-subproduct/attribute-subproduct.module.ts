import { Module } from '@nestjs/common';
import { AttributeSubproductService } from './attribute-subproduct.service';
import { AttributeSubproductResolver } from './attribute-subproduct.resolver';
import { AttributeSubproduct } from './entities/attribute-subproduct.entity';
import { AttributeSubproduct as AttributeSubproductGraphQL } from './domain/attribute-subproduct';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateAttributeSubproductInput } from '@/modules/attribute-subproduct/dto/create-attribute-subproduct.input';

@Module({
  providers: [AttributeSubproductResolver, AttributeSubproductService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([AttributeSubproduct])],
      resolvers: [
        {
          EntityClass: AttributeSubproduct,
          DTOClass: AttributeSubproductGraphQL,
          CreateDTOClass: CreateAttributeSubproductInput,
        },
      ],
    }),
  ],
})
export class AttributeSubproductModule {}
