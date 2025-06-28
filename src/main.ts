import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: [
      'http://localhost:5000', //Host dos MFE
      'http://localhost:5001', //MFE auth
      'http://localhost:5002', //MFE dashboard
      'http://localhost:5003', //MFE cotas
    ],
    credentials: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  await app.listen(4000);
  console.log(`Rodando na URL...: ${await app.getUrl()}/graphql`);
}
bootstrap();
