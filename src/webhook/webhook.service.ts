import { Injectable } from '@nestjs/common';

@Injectable()
export class WebhookService {
  getSayHelow(): string {
    return 'hello';
  }
  postGitHook(b: any):string {
    return 'postGitHook'
  }
}
