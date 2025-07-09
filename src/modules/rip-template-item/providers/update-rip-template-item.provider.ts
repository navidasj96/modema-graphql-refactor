import { UpdateRipTemplateItemInput } from '@/modules/rip-template-item/dto/update-rip-template-item.input';
import { RipTemplateItem } from '@/modules/rip-template-item/entities/rip-template-item.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';

@Injectable()
export class UpdateRipTemplateItemProvider {
  constructor(
    /**
     * inject ripTemplateItemRepository
     */
    @InjectRepository(RipTemplateItem)
    private readonly ripTemplateItemRepository: Repository<RipTemplateItem>
  ) {}

  async updateRipTemplateItem(
    updateRipTemplateItemInput: UpdateRipTemplateItemInput,
    manager?: EntityManager
  ) {
    const ripTemplateItemRepository = manager
      ? manager.getRepository(RipTemplateItem)
      : this.ripTemplateItemRepository;
    const { id, ripTemplateItemUpdate } = updateRipTemplateItemInput;
    try {
      const ripTemplateItems = await ripTemplateItemRepository.find({
        where: { ripTemplateId: id },
      });

      const updateMap = new Map<number, { width: number; length: number }>();
      ripTemplateItemUpdate.forEach(({ key, value }) => {
        updateMap.set(key, value);
      });

      for (const item of ripTemplateItems) {
        const update = updateMap.get(item.basicCarpetSizeId);
        if (update) {
          item.width = update.width;
          item.length = update.length;
        }
      }
      await ripTemplateItemRepository.save(ripTemplateItems);
      return {
        message: `Rip Template items successfully edited`,
        status: true,
      };
    } catch (error) {
      return {
        message: `error ${error} occured`,
        status: false,
      };
    }
  }
}
