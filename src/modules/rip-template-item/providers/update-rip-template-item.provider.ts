import { RipTemplateItem } from '@/modules/rip-template-item/entities/rip-template-item.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

export class UpdateRipTemplateItemProvider {
  constructor(
    /**
     * inject ripTemplateItemRepository
     */
    @InjectRepository(RipTemplateItem)
    private readonly ripTemplateItemRepository: Repository<RipTemplateItem>
  ) {}

  async updateRipTemplateItem(
    ripTemplateItemUpdate: Record<number, { width: number; length: number }>
  ) {

    const 
  }
}
