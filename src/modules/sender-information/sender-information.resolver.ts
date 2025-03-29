import { Resolver } from '@nestjs/graphql';
import { SenderInformationService } from './sender-information.service';
import { SenderInformation } from '@/modules/sender-information/domain/sender-information';

@Resolver(() => SenderInformation)
export class SenderInformationResolver {
  constructor(
    private readonly senderInformationService: SenderInformationService,
  ) {}
}
