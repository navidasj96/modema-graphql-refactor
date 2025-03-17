import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('redis_saved_keys_redis_key_unique', ['redisKey'], { unique: true })
@Entity('redis_saved_keys', { schema: 'modema' })
export class RedisSavedKey {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id', unsigned: true })
  id: string;

  @Column('varchar', { name: 'redis_key', unique: true, length: 191 })
  redisKey: string;

  @Column('int', { name: 'sort_order', default: () => "'100'" })
  sortOrder: number;

  @Column('int', { name: 'key_length', default: () => "'0'" })
  keyLength: number;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;
}
