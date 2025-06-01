import { Attribute } from '@/modules/attribute/entities/attribute.entity';

export class AttributeViewModel {
  public id: number;
  public name: string;
  public type: number;
  public sortOrder: number | undefined;
  public isActive: number | undefined;

  constructor(attribute: Attribute) {
    this.id = attribute.id;
    this.name = attribute.name;
    this.type = attribute.type;
    this.isActive = attribute.isActive;
    this.sortOrder = attribute.sortOrder;
  }
}
