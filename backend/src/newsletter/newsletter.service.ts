import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NewsletterSubscriber } from './newsletter.entity';

@Injectable()
export class NewsletterService {
  constructor(
    @InjectRepository(NewsletterSubscriber)
    private newsletterRepository: Repository<NewsletterSubscriber>,
  ) {}

  async subscribe(email: string, preferences?: any): Promise<NewsletterSubscriber> {
    let subscriber = await this.newsletterRepository.findOne({ where: { email } });
    
    if (subscriber) {
      subscriber.isSubscribed = true;
      subscriber.preferences = preferences || subscriber.preferences;
    } else {
      subscriber = this.newsletterRepository.create({
        email,
        preferences,
        isSubscribed: true,
      });
    }

    return await this.newsletterRepository.save(subscriber);
  }

  async unsubscribe(email: string): Promise<NewsletterSubscriber> {
    const subscriber = await this.newsletterRepository.findOne({ where: { email } });
    if (subscriber) {
      subscriber.isSubscribed = false;
      return await this.newsletterRepository.save(subscriber);
    }
    return null;
  }

  async getAllSubscribers(): Promise<NewsletterSubscriber[]> {
    return await this.newsletterRepository.find({ where: { isSubscribed: true } });
  }
}
