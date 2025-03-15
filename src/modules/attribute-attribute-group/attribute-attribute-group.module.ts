import { Module } from '@nestjs/common';
import { AttributeAttributeGroupService } from './attribute-attribute-group.service';
import { AttributeAttributeGroupResolver } from './attribute-attribute-group.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AttributeAttributeGroup } from './entities/attribute-attribute-group.entity';

@Module({
  providers: [AttributeAttributeGroupResolver, AttributeAttributeGroupService],
  imports: [TypeOrmModule.forFeature([AttributeAttributeGroup])],
})
export class AttributeAttributeGroupModule {}
