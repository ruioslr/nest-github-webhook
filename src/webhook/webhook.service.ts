import { Injectable } from '@nestjs/common';
import * as shell from 'shelljs';

function doBlogRefresh() {
  shell.cd('/home/ruios/projects/blog');
  console.log(`now in ${shell.pwd()}`);
  shell.exec('git pull', {async: true});
  shell.exec('npm run build',{async: true});
  console.log('blog refreshed');
}

@Injectable()
export class WebhookService {
  getSayHelow(): string {
    return 'hello';
  }
  postGitHook(b: any): string {
    try {
      if (b.ref === 'refs/heads/master' && b.repository.name === 'blog') {
        doBlogRefresh();
        return 'ok';
      } else {
        return 'not ok';
      }
    } catch (e) {
      console.log(e)
      return 'error';
    }
  }
}
