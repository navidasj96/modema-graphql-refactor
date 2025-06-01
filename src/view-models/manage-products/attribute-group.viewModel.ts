import { AttributeGroup } from '@/modules/attribute-group/entities/attribute-group.entity';
import { AttributeViewModel } from '@/view-models/manage-products/attribute.viewModel';

export class AttributeGroupViewModel {
  id: number;
  productCategoryId: number | undefined;
  name: string;
  generalName: string | undefined;
  attributes: any[];
  sortOrder: number | undefined;
  isActive: number | undefined;

  prepare(attributeGroup: AttributeGroup) {
    let attributes = attributeGroup.attributeAttributeGroups?.map(
      (att) => att.attribute
    );

    if (attributes) {
      attributes.map((attribute) => new AttributeViewModel(attribute));
    }

    return {
      id: attributeGroup.id,
      productCategoryId: attributeGroup.productCategoryId,
      name: attributeGroup.name,
      generalName: attributeGroup.generalName,
      sortOrder: attributeGroup.sortOrder,
      isActive: attributeGroup.isActive,
      attributes: attributes,
    };
  }
}
