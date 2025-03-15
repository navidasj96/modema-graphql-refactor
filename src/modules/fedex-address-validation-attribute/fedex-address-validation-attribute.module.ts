import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { FedexAddressValidationAttribute } from './entities/fedex-address-validation-attribute.entity';
import { FedexAddressValidationAttribute as FedexAddressValidationAttributeGraphQL } from './domain/fedex-address-validation-attribute';
import { CreateFedexAddressValidationAttributeInput } from './dto/create-fedex-address-validation-attribute.input';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [
        NestjsQueryTypeOrmModule.forFeature([FedexAddressValidationAttribute]),
      ],
      resolvers: [
        {
          EntityClass: FedexAddressValidationAttribute,
          DTOClass: FedexAddressValidationAttributeGraphQL,
          CreateDTOClass: CreateFedexAddressValidationAttributeInput,
        },
      ],
    }),
  ],
})
export class FedexAddressValidationAttributeModule {}
