import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT = process.env.PORT || 7070;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT).then(() => {
    console.log(`Server running on port ${PORT}`);
  });
}
bootstrap();
