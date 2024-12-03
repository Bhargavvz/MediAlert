import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../common/base.entity';

@Entity('newsletter_subscribers')
export class NewsletterSubscriber extends BaseEntity {
  @Column({ unique: true })
  email: string;

  @Column({ default: true })
  isSubscribed: boolean;

  @Column({ type: 'jsonb', nullable: true })
  preferences: any;
}
