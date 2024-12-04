import { Controller, Post, Body, Get, Param, Put, BadRequestException, Logger, InternalServerErrorException } from '@nestjs/common';
import { ContactService } from './contact.service';
import { Contact } from './contact.entity';

@Controller('contact')
export class ContactController {
  private readonly logger = new Logger(ContactController.name);
  
  constructor(private readonly contactService: ContactService) {}

  @Post()
  async create(@Body() contactData: Partial<Contact>) {
    return await this.contactService.create(contactData);
  }

  @Post('form')
  async handleContact(@Body() contactData: any) {
    this.logger.debug('Received contact form data:', JSON.stringify(contactData));
    try {
      const { firstName, lastName, email, message } = contactData;
      
      // Validate required fields
      if (!firstName || !lastName || !email || !message) {
        const missingFields = [];
        if (!firstName) missingFields.push('firstName');
        if (!lastName) missingFields.push('lastName');
        if (!email) missingFields.push('email');
        if (!message) missingFields.push('message');
        
        this.logger.error(`Missing required fields: ${missingFields.join(', ')}`);
        throw new BadRequestException(`Missing required fields: ${missingFields.join(', ')}`);
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        this.logger.error(`Invalid email format: ${email}`);
        throw new BadRequestException('Invalid email address');
      }

      const contactToCreate = {
        name: `${firstName} ${lastName}`,
        email,
        subject: 'Contact Form Submission',
        message,
        isResolved: false
      };

      this.logger.debug('Attempting to save contact:', JSON.stringify(contactToCreate));
      
      try {
        const contact = await this.contactService.create(contactToCreate);
        this.logger.debug('Successfully saved contact:', JSON.stringify(contact));
        return { message: 'Message sent successfully', contact };
      } catch (dbError) {
        this.logger.error('Database error:', dbError);
        throw new InternalServerErrorException('Failed to save contact message');
      }
    } catch (error) {
      this.logger.error('Error in handleContact:', error);
      if (error instanceof BadRequestException || error instanceof InternalServerErrorException) {
        throw error;
      }
      throw new InternalServerErrorException('An unexpected error occurred');
    }
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
