import { Module } from '@nestjs/common';
import { ModemaAcceleratorService } from './modema-accelerator.service';
import { ModemaAcceleratorResolver } from './modema-accelerator.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModemaAccelerator } from '@/modules/modema-accelerator/entities/modema-accelerator.entity';
import { ModemaAccelerator as ModemaAcceleratorGraphQL } from '@/modules/modema-accelerator/domain/modema-accelerator';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateModemaAcceleratorInput } from '@/modules/modema-accelerator/dto/create-modema-accelerator.input';

@Module({
  providers: [ModemaAcceleratorResolver, ModemaAcceleratorService],
  imports: [
    TypeOrmModule.forFeature([ModemaAccelerator]),
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([ModemaAccelerator])],
      resolvers: [
        {
          EntityClass: ModemaAccelerator,
          DTOClass: ModemaAcceleratorGraphQL,
          CreateDTOClass: CreateModemaAcceleratorInput,
        },
      ],
    }),
  ],
})
export class ModemaAcceleratorModule {}
