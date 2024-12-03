import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contact } from './contact.entity';

@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(Contact)
    private contactRepository: Repository<Contact>,
  ) {}

  async create(contactData: Partial<Contact>): Promise<Contact> {
    const contact = this.contactRepository.create(contactData);
    return await this.contactRepository.save(contact);
  }

  async findAll(): Promise<Contact[]> {
    return await this.contactRepository.find();
  }

  async markAsResolved(id: string): Promise<Contact> {
    await this.contactRepository.update(id, { isResolved: true });
    return await this.contactRepository.findOne({ where: { id } });
  }
}
