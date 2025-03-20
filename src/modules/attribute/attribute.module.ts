import { Module } from '@nestjs/common';
import { AttributeService } from './attribute.service';
import { AttributeResolver } from './attribute.resolver';
import { Attribute } from './entities/attribute.entity';
import { Attribute as AttributeGraphQL } from './domain/attribute';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateAttributeInput } from '@/modules/attribute/dto/create-attribute.input';

@Module({
  providers: [AttributeResolver, AttributeService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Attribute])],
      resolvers: [
        {
          EntityClass: Attribute,
          DTOClass: AttributeGraphQL,
          CreateDTOClass: CreateAttributeInput,
        },
      ],
    }),
  ],
})
export class AttributeModule {}
