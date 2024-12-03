import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../common/base.entity';

@Entity('contacts')
export class Contact extends BaseEntity {
  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  subject: string;

  @Column('text')
  message: string;

  @Column({ default: false })
  isResolved: boolean;
}
