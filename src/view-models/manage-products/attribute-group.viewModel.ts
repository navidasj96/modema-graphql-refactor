import { AttributeGroup } from '@/modules/attribute-group/entities/attribute-group.entity';
import { AttributeViewModel } from './attribute.viewModel';

export class AttributeGroupViewModel {
  id: number;
  productCategoryId: number | undefined;
  name: string;
  generalName: string | undefined;
  attributes: AttributeViewModel[];
  sortOrder: number | undefined;
  isActive: number | undefined;

  constructor(attributeGroup: AttributeGroup) {
    const attributes = attributeGroup.attributeAttributeGroups
      ?.map((pivot) => pivot.attribute)
      .filter((attr) => attr !== undefined);
    this.id = attributeGroup.id;
    this.productCategoryId = attributeGroup.productCategoryId;
    this.name = attributeGroup.name;
    this.generalName = attributeGroup.generalName;
    this.sortOrder = attributeGroup.sortOrder;
    this.isActive = attributeGroup.isActive;

    this.attributes = Array.isArray(attributeGroup.attributes)
      ? attributeGroup.attributes.map(
          (attribute: any) => new AttributeViewModel(attribute)
        )
      : [];
  }
}
