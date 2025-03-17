import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tmp_tag_changes_print', { schema: 'modema' })
export class TmpTagChangesPrint {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'size', nullable: true, length: 50 })
  size?: string;

  @Column('varchar', { name: 'code', nullable: true, length: 50 })
  code?: string;

  @Column('int', { name: 'count', nullable: true })
  count?: number;

  @Column('varchar', { name: 'old_code', nullable: true, length: 50 })
  oldCode?: string;
}
