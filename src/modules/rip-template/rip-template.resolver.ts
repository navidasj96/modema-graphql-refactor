import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { RipTemplateService } from './rip-template.service';
import { RipTemplate } from '@/modules/rip-template/domain/rip-template';
import { GeneralResponseDto } from '@/utils/general-response.dto';
import { UpdateRipTemplateInput } from '@/modules/rip-template/dto/update-rip-template.input';
import { UserContext } from '@/modules/auth/interfaces/UserContext';
import { CreateRipTemplateInput } from '@/modules/rip-template/dto/create-rip-template.input';

@Resolver(() => RipTemplate)
export class RipTemplateResolver {
  constructor(private readonly ripTemplateService: RipTemplateService) {}

  @Mutation(() => GeneralResponseDto)
  async updateRipTemplate(
    @Args('updateRipTemplateInput', { type: () => UpdateRipTemplateInput })
    updateRipTemplateInput: UpdateRipTemplateInput,
    @Context()
    context: {
      req: UserContext;
    }
  ) {
    return await this.ripTemplateService.update(
      updateRipTemplateInput,
      context
    );
  }

  @Mutation(() => GeneralResponseDto)
  async createRipTemplate(
    @Args('createRipTemplateInput', { type: () => CreateRipTemplateInput })
    createRipTemplateInput: CreateRipTemplateInput,
    @Context()
    context: {
      req: UserContext;
    }
  ) {
    return await this.ripTemplateService.create(
      createRipTemplateInput,
      context
    );
  }
}
