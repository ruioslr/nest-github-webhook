import { WebhookService } from './webhook.service';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
  DefaultValuePipe,
  ParseIntPipe,
  HttpStatus,
  HttpCode,
  SerializeOptions,
} from '@nestjs/common';

@Controller('/webhook')
export class WebhookController {
  constructor(private readonly webhookService: WebhookService) {}

  @Get('/push/blog')
  getSayHelow(): string {
    return this.webhookService.getSayHelow();
  }

  @Post('/push/blog')
  postGitHook(@Body() b: any): string {
    return this.webhookService.postGitHook(b);
  }
}
