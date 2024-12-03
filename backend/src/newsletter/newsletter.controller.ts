import { Controller, Post, Body, Delete, Param, Get } from '@nestjs/common';
import { NewsletterService } from './newsletter.service';

@Controller('newsletter')
export class NewsletterController {
  constructor(private readonly newsletterService: NewsletterService) {}

  @Post('subscribe')
  async subscribe(
    @Body() data: { email: string; preferences?: any },
  ) {
    return await this.newsletterService.subscribe(data.email, data.preferences);
  }

  @Delete('unsubscribe/:email')
  async unsubscribe(@Param('email') email: string) {
    return await this.newsletterService.unsubscribe(email);
  }

  @Get('subscribers')
  async getAllSubscribers() {
    return await this.newsletterService.getAllSubscribers();
  }
}
