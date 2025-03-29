import { Resolver } from '@nestjs/graphql';
import { GoogleFormUtmService } from './google-form-utm.service';
import { GoogleFormUtm } from './domain/google-form-utm';

@Resolver(() => GoogleFormUtm)
export class GoogleFormUtmResolver {
  constructor(private readonly googleFormUtmService: GoogleFormUtmService) {}
}
