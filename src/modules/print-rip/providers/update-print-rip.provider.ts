import { AuthService } from '@/modules/auth/auth.service';
import { UserContext } from '@/modules/auth/interfaces/UserContext';
import { UpdatePrintRipInput } from '@/modules/print-rip/dto/update-print-rip.input';
import { PrintRip } from '@/modules/print-rip/entities/print-rip.entity';
import { PrintRipPermissions } from '@/utils/permissions';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Not, Repository } from 'typeorm';

@Injectable()
export class UpdatePrintRipProvider {
  constructor(
    /**
     * inject AuthService
     */
    private readonly authService: AuthService,
    /**
     * inject printRipRepository
     */
    @InjectRepository(PrintRip)
    private readonly printRipRepository: Repository<PrintRip>
  ) {}

  async updatePrintRip(
    context: {
      req: UserContext;
    },
    updatePrintRip: UpdatePrintRipInput
  ) {
    const { id, ripNumber, ripTemplateId } = updatePrintRip;

    const userHasPermissionToUpdatePrintRip =
      await this.authService.userPermissionCheck(
        [PrintRipPermissions.PERMISSION_TO_CHANGE],
        context
      );

    if (!userHasPermissionToUpdatePrintRip) {
      return {
        message: 'شما دسترسی لازم برای ویرایش این چاپ را ندارید.',
        status: false,
      };
    }

    const similarPrintRipNumber = await this.printRipRepository.findOne({
      where: {
        ripNumber,
        id: Not(id),
      },
    });

    if (similarPrintRipNumber) {
      return {
        message: 'The Print Rip Number already exists in the system.',
        status: false,
      };
    }

    try {
      await this.printRipRepository.update(id, {
        ripNumber,
        ripTemplateId,
        updatedAt: new Date(),
      });
      return {
        message: 'Print Rip successfully updated.',
        status: true,
      };
    } catch (error) {
      return {
        message: `${error}`,
        status: false,
      };
    }
  }
}
