import { Injectable } from '@nestjs/common';
import * as shell from 'shelljs';

function doBlogRefresh() {
  shell.cd('/home/ruios/projects/blog');
  shell.echo(`now in ${shell.pwd()}`);
  shell.exec('git pull');
  shell.exec('npm run build');
  shell.echo('blog refreshed');
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
