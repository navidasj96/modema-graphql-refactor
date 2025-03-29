import { Resolver } from '@nestjs/graphql';
import { DamageReasonService } from './damage-reason.service';
import { DamageReason } from './domain/damage-reason';

@Resolver(() => DamageReason)
export class DamageReasonResolver {
  constructor(private readonly damageReasonService: DamageReasonService) {}
}
