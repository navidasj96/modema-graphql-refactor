import { Resolver } from '@nestjs/graphql';
import { ConfigService } from './config.service';
import { Config } from './domain/config';

@Resolver(() => Config)
export class ConfigResolver {
  constructor(private readonly configService: ConfigService) {}
}
