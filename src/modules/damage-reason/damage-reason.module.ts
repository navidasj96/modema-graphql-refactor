import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { DamageReason } from './entities/damage-reason.entity';
import { DamageReason as DamageReasonGraphQL } from './domain/damage-reason';
import { CreateDamageReasonInput } from './dto/create-damage-reason.input';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([DamageReason])],
      resolvers: [
        {
          EntityClass: DamageReason,
          DTOClass: DamageReasonGraphQL,
          CreateDTOClass: CreateDamageReasonInput,
        },
      ],
    }),
  ],
})
export class DamageReasonModule {}
