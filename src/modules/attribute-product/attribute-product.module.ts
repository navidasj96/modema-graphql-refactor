import { Module } from '@nestjs/common';
import { AttributeProductService } from './attribute-product.service';
import { AttributeProductResolver } from './attribute-product.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AttributeProduct } from './entities/attribute-product.entity';

@Module({
  providers: [AttributeProductResolver, AttributeProductService],
  imports: [TypeOrmModule.forFeature([AttributeProduct])],
})
export class AttributeProductModule {}
