import { Module } from '@nestjs/common';
import { AttributeAttributeGroupService } from './attribute-attribute-group.service';
import { AttributeAttributeGroupResolver } from './attribute-attribute-group.resolver';
import { AttributeAttributeGroup } from './entities/attribute-attribute-group.entity';
import { AttributeAttributeGroup as AttributeAttributeGroupGraphQL } from './domain/attribute-attribute-group';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateAttributeAttributeGroupInput } from '@/modules/attribute-attribute-group/dto/create-attribute-attribute-group.input';

@Module({
  providers: [AttributeAttributeGroupResolver, AttributeAttributeGroupService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([AttributeAttributeGroup])],
      resolvers: [
        {
          EntityClass: AttributeAttributeGroup,
          DTOClass: AttributeAttributeGroupGraphQL,
          CreateDTOClass: CreateAttributeAttributeGroupInput,
        },
      ],
    }),
  ],
})
export class AttributeAttributeGroupModule {}
