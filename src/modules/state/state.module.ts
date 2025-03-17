import { Module } from '@nestjs/common';
import { StateService } from './state.service';
import { StateResolver } from './state.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { State } from '@/modules/state/entities/state.entity';
import { State as StateGraphQL } from '@/modules/state/domain/state';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateStateInput } from '@/modules/state/dto/create-state.input';

@Module({
  providers: [StateResolver, StateService],
  imports: [
    TypeOrmModule.forFeature([State]),
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([State])],
      resolvers: [
        {
          EntityClass: State,
          DTOClass: StateGraphQL,
          CreateDTOClass: CreateStateInput,
        },
      ],
    }),
  ],
})
export class StateModule {}
