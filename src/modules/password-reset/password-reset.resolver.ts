import { Resolver } from '@nestjs/graphql';
import { PasswordResetService } from './password-reset.service';
import { PasswordReset } from '@/modules/password-reset/domain/password-reset';

@Resolver(() => PasswordReset)
export class PasswordResetResolver {
  constructor(private readonly passwordResetService: PasswordResetService) {}
}
