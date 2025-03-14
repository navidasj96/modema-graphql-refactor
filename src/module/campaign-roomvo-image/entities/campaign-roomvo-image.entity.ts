import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('campaign_roomvo_images_user_id_index', ['userId'], {})
@Index('campaign_roomvo_images_votes_count_index', ['votesCount'], {})
@Entity('campaign_roomvo_images', { schema: 'modema' })
export class CampaignRoomvoImage {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'user_id', unsigned: true })
  userId: number;

  @Column('int', { name: 'votes_count', unsigned: true, default: () => "'0'" })
  votesCount: number;

  @Column('varchar', { name: 'path', nullable: true, length: 191 })
  path?: string;

  @Column('varchar', { name: 'filename', nullable: true, length: 191 })
  filename?: string;

  @Column('varchar', { name: 'original_filename', nullable: true, length: 191 })
  originalFilename?: string;

  @Column('varchar', { name: 'mime', nullable: true, length: 191 })
  mime?: string;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;
}
