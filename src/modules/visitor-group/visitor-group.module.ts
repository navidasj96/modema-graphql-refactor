import { Module } from '@nestjs/common';
import { VisitorGroupService } from './visitor-group.service';
import { VisitorGroupResolver } from './visitor-group.resolver';
import { VisitorGroup } from '@/modules/visitor-group/entities/visitor-group.entity';
import { VisitorGroup as VisitorGroupGraphQL } from '@/modules/visitor-group/domain/visitor-group';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateVisitorGroupInput } from '@/modules/visitor-group/dto/create-visitor-group.input';

@Module({
  providers: [VisitorGroupResolver, VisitorGroupService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([VisitorGroup])],
      resolvers: [
        {
          EntityClass: VisitorGroup,
          DTOClass: VisitorGroupGraphQL,
          CreateDTOClass: CreateVisitorGroupInput,
        },
      ],
    }),
  ],
})
export class VisitorGroupModule {}
