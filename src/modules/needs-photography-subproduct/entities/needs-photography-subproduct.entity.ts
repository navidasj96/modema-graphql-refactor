import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Subproduct } from '@/modules/subproduct/entities/subproduct.entity';
import { User } from '@/modules/user/entities/user.entity';

@Index(
  'needs_photography_subproducts_announced_user_id_index',
  ['announcedUserId'],
  {},
)
@Index(
  'needs_photography_subproducts_photography_user_id_index',
  ['photographyUserId'],
  {},
)
@Index(
  'needs_photography_subproducts_subproduct_id_index',
  ['subproductId'],
  {},
)
@Entity('needs_photography_subproducts', { schema: 'modema' })
export class NeedsPhotographySubproduct {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'subproduct_id', unsigned: true })
  subproductId: number;

  @Column('datetime', { name: 'announced_date', nullable: true })
  announcedDate?: Date;

  @Column('datetime', { name: 'photography_date', nullable: true })
  photographyDate?: Date;

  @Column('int', { name: 'announced_user_id', nullable: true, unsigned: true })
  announcedUserId?: number;

  @Column('int', {
    name: 'photography_user_id',
    nullable: true,
    unsigned: true,
  })
  photographyUserId?: number;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @Column('timestamp', { name: 'deleted_at', nullable: true })
  deletedAt?: Date;

  @ManyToOne(() => User, (user) => user.needsPhotographySubproducts, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'announced_user_id', referencedColumnName: 'id' }])
  announcedUser?: User;

  @ManyToOne(() => User, (user) => user.needsPhotographySubproducts2, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'photography_user_id', referencedColumnName: 'id' }])
  photographyUser?: User;

  @ManyToOne(
    () => Subproduct,
    (subproduct) => subproduct.needsPhotographySubproducts,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' },
  )
  @JoinColumn([{ name: 'subproduct_id', referencedColumnName: 'id' }])
  subproduct?: Subproduct;
}
