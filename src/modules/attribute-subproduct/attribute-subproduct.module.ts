import { Module } from '@nestjs/common';
import { AttributeSubproductService } from './attribute-subproduct.service';
import { AttributeSubproductResolver } from './attribute-subproduct.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AttributeSubproduct } from './entities/attribute-subproduct.entity';

@Module({
  providers: [AttributeSubproductResolver, AttributeSubproductService],
  imports: [TypeOrmModule.forFeature([AttributeSubproduct])],
})
export class AttributeSubproductModule {}
