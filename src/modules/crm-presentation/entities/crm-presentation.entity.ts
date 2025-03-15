import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('crm_presentation', { schema: 'modema' })
export class CrmPresentation {
  @PrimaryGeneratedColumn()
  mobile?: string;

  @Column('int', { name: 'option_id', nullable: true })
  optionId?: number;
}
