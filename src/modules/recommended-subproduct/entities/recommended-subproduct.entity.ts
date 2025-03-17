import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('recommended_subproducts_subproduct_id_index', ['subproductId'], {})
@Entity('recommended_subproducts', { schema: 'modema' })
export class RecommendedSubproduct {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'subproduct_id', unsigned: true })
  subproductId: number;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;
}
