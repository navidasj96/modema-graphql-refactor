import { UpdateRipTemplateItemInput } from '@/modules/rip-template-item/dto/update-rip-template-item.input';
import { RipTemplateItem } from '@/modules/rip-template-item/entities/rip-template-item.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';

@Injectable()
export class CreateRipTemplateItemsProvider {
  constructor(
    /**
     * inject ripTemplateItemRepository
     */
    @InjectRepository(RipTemplateItem)
    private readonly ripTemplateItemRepository: Repository<RipTemplateItem>
  ) {}

  //create and update has the same dto
  async createRipTemplateItems(
    createRipTemplateItemInput: UpdateRipTemplateItemInput,
    manager?: EntityManager
  ) {
    const ripTemplateItemRepository = manager
      ? manager.getRepository(RipTemplateItem)
      : this.ripTemplateItemRepository;
    const { id, ripTemplateItemUpdate } = createRipTemplateItemInput;

    try {
      const ripTemplateItems: RipTemplateItem[] = [];
      ripTemplateItemUpdate.forEach((ripTemplateItem) => {
        const ripTemplateItemEntity = ripTemplateItemRepository.create({
          ...ripTemplateItem.value,
          ripTemplateId: id,
          basicCarpetSizeId: ripTemplateItem.key,
        });
        ripTemplateItems.push(ripTemplateItemEntity);
      });
      for (const ripTemplateItem of ripTemplateItems) {
        await ripTemplateItemRepository.save(ripTemplateItem);
      }

      return {
        message: `Rip Template items successfully created`,
        status: true,
      };
    } catch (error) {
      return {
        message: `error ${error} occurred`,
        status: false,
      };
    }
  }
}
