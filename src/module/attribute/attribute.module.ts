import { Module } from '@nestjs/common';
import { AttributeService } from './attribute.service';
import { AttributeResolver } from './attribute.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Attribute } from './entities/attribute.entity';

@Module({
  providers: [AttributeResolver, AttributeService],
  imports: [TypeOrmModule.forFeature([Attribute])],
})
export class AttributeModule {}
