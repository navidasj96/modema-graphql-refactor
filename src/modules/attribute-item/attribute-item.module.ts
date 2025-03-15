import { Module } from '@nestjs/common';
import { AttributeItemService } from './attribute-item.service';
import { AttributeItemResolver } from './attribute-item.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AttributeItem } from './entities/attribute-item.entity';

@Module({
  providers: [AttributeItemResolver, AttributeItemService],
  imports: [TypeOrmModule.forFeature([AttributeItem])],
})
export class AttributeItemModule {}
