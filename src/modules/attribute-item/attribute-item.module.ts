import { Module } from '@nestjs/common';
import { AttributeItemService } from './attribute-item.service';
import { AttributeItemResolver } from './attribute-item.resolver';
import { AttributeItem } from './entities/attribute-item.entity';
import { AttributeItem as AttributeItemGraphQL } from './domain/attribute-item';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateAttributeItemInput } from '@/modules/attribute-item/dto/create-attribute-item.input';

@Module({
  providers: [AttributeItemResolver, AttributeItemService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([AttributeItem])],
      resolvers: [
        {
          EntityClass: AttributeItem,
          DTOClass: AttributeItemGraphQL,
          CreateDTOClass: CreateAttributeItemInput,
        },
      ],
    }),
  ],
})
export class AttributeItemModule {}
