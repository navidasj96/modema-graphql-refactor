import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CampaignPetForm } from './entities/campaign-pet-form.entity';
import { CampaignPetForm as CampaignPetFormGraphQL } from './domain/campaign-pet-form';
import { CreateCampaignPetFormInput } from './dto/create-campaign-pet-form.input';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([CampaignPetForm])],
      resolvers: [
        {
          EntityClass: CampaignPetForm,
          DTOClass: CampaignPetFormGraphQL,
          CreateDTOClass: CreateCampaignPetFormInput,
        },
      ],
    }),
  ],
})
export class CampaignPetFormModule {}
