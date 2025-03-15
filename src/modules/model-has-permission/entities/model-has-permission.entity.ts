import { Column, Entity, Index } from 'typeorm';

@Index(
  'model_has_permissions_model_type_model_id_index',
  ['modelType', 'modelId'],
  {},
)
@Entity('model_has_permissions', { schema: 'modema' })
export class ModelHasPermission {
  @Column('int', { primary: true, name: 'permission_id', unsigned: true })
  permissionId: number;

  @Column('varchar', { primary: true, name: 'model_type', length: 191 })
  modelType: string;

  @Column('bigint', { primary: true, name: 'model_id', unsigned: true })
  modelId: string;
}
