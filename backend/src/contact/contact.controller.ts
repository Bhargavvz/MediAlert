import { Controller, Post, Body, Get, Param, Put } from '@nestjs/common';
import { ContactService } from './contact.service';
import { Contact } from './contact.entity';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  async create(@Body() contactData: Partial<Contact>) {
    return await this.contactService.create(contactData);
  }

  @Get()
  async findAll() {
    return await this.contactService.findAll();
  }

  @Put(':id/resolve')
  async markAsResolved(@Param('id') id: string) {
    return await this.contactService.markAsResolved(id);
  }
}
