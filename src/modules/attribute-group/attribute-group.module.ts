import { Module } from '@nestjs/common';
import { AttributeGroupService } from './attribute-group.service';
import { AttributeGroupResolver } from './attribute-group.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AttributeGroup } from './entities/attribute-group.entity';

@Module({
  providers: [AttributeGroupResolver, AttributeGroupService],
  imports: [TypeOrmModule.forFeature([AttributeGroup])],
})
export class AttributeGroupModule {}
