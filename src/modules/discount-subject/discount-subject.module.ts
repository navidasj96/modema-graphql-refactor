import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { DiscountSubject } from './entities/discount-subject.entity';
import { DiscountSubject as DiscountSubjectGraphQL } from './domain/discount-subject';
import { CreateDiscountSubjectInput } from './dto/create-discount-subject.input';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([DiscountSubject])],
      resolvers: [
        {
          EntityClass: DiscountSubject,
          DTOClass: DiscountSubjectGraphQL,
          CreateDTOClass: CreateDiscountSubjectInput,
        },
      ],
    }),
  ],
})
export class DiscountSubjectModule {}
