import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PasswordResetService } from './password-reset.service';
import { CreatePasswordResetInput } from './dto/create-password-reset.input';
import { UpdatePasswordResetInput } from './dto/update-password-reset.input';
import { PasswordReset } from '@/modules/password-reset/domain/password-reset';

@Resolver(() => PasswordReset)
export class PasswordResetResolver {
  constructor(private readonly passwordResetService: PasswordResetService) {}

  @Mutation(() => PasswordReset)
  createPasswordReset(
    @Args('createPasswordResetInput')
    createPasswordResetInput: CreatePasswordResetInput,
  ) {
    return this.passwordResetService.create(createPasswordResetInput);
  }

  @Query(() => [PasswordReset], { name: 'passwordReset' })
  findAll() {
    return this.passwordResetService.findAll();
  }

  @Query(() => PasswordReset, { name: 'passwordReset' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.passwordResetService.findOne(id);
  }

  @Mutation(() => PasswordReset)
  updatePasswordReset(
    @Args('updatePasswordResetInput')
    updatePasswordResetInput: UpdatePasswordResetInput,
  ) {
    return this.passwordResetService.update(
      updatePasswordResetInput.id,
      updatePasswordResetInput,
    );
  }

  @Mutation(() => PasswordReset)
  removePasswordReset(@Args('id', { type: () => Int }) id: number) {
    return this.passwordResetService.remove(id);
  }
}
