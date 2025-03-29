import { Module } from '@nestjs/common';
import { AttributeGroupService } from './attribute-group.service';
import { AttributeGroupResolver } from './attribute-group.resolver';
import { AttributeGroup } from './entities/attribute-group.entity';
import { AttributeGroup as AttributeGroupGraphQL } from './domain/attribute-group';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateAttributeGroupInput } from '@/modules/attribute-group/dto/create-attribute-group.input';

@Module({
  providers: [AttributeGroupResolver, AttributeGroupService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([AttributeGroup])],
      resolvers: [
        {
          EntityClass: AttributeGroup,
          DTOClass: AttributeGroupGraphQL,
          CreateDTOClass: CreateAttributeGroupInput,
        },
      ],
    }),
  ],
})
export class AttributeGroupModule {}
