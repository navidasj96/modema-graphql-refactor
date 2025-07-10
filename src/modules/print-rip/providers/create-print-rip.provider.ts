import { AuthService } from '@/modules/auth/auth.service';
import { UserContext } from '@/modules/auth/interfaces/UserContext';
import { CreatePrintRipInput } from '@/modules/print-rip/dto/create-print-rip.input';
import { PrintRip } from '@/modules/print-rip/entities/print-rip.entity';
import { PrintRipPermissions } from '@/utils/permissions';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CreatePrintRipProvider {
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

  async createPrintRip(
    context: {
      req: UserContext;
    },
    createPrintRipInput: CreatePrintRipInput
  ) {
    const {
      req: {
        user: { sub: userId },
      },
    } = context;

    const userHasPermissionToAddPrintRip =
      await this.authService.userPermissionCheck(
        [PrintRipPermissions.PERMISSION_TO_CHANGE],
        context
      );

    if (!userHasPermissionToAddPrintRip) {
      return {
        message: 'شما دسترسی لازم برای افزودن چاپ را ندارید.',
        status: false,
      };
    }

    const { ripNumber, ripTemplateId } = createPrintRipInput;

    try {
      const printRip = this.printRipRepository.create({
        ripNumber,
        ripTemplateId,
        userId,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      const existingPrintRip = await this.printRipRepository.findOne({
        where: { ripNumber },
      });

      if (existingPrintRip) {
        return {
          message: 'The rip number already exists in the system.',
          status: false,
        };
      }
      await this.printRipRepository.save(printRip);
      return {
        message: 'Print Rip Number successfully added.',
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
