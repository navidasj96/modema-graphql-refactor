import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('automation_rfm_scores', { schema: 'modema' })
export class AutomationRfmScore {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'rfm_score', length: 191 })
  rfmScore: string;

  @Column('varchar', { name: 'rfm_score_title', length: 191 })
  rfmScoreTitle: string;

  @Column('varchar', { name: 'rfm_score_code', length: 191 })
  rfmScoreCode: string;
}
