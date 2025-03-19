import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ContactForm } from '@/modules/contact-form/entities/contact-form.entity';

@Index('departments_name_unique', ['name'], { unique: true })
@Entity('departments', { schema: 'modema' })
export class Department {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'name', unique: true, length: 191 })
  name: string;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @Column('varchar', { name: 'name_en', nullable: true, length: 191 })
  nameEn?: string;

  @OneToMany(() => ContactForm, (contactForm) => contactForm.department)
  contactForms: ContactForm[];
}
