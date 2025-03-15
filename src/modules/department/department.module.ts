import { Module } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { DepartmentResolver } from './department.resolver';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { Department } from './entities/department.entity';
import { Department as DepartmentGraphQL } from './domain/department';
import { CreateDepartmentInput } from './dto/create-department.input';

@Module({
  providers: [DepartmentResolver, DepartmentService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Department])],
      resolvers: [
        {
          EntityClass: Department,
          DTOClass: DepartmentGraphQL,
          CreateDTOClass: CreateDepartmentInput,
        },
      ],
    }),
  ],
})
export class DepartmentModule {}
