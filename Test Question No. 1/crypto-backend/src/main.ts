import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: '*' });
  app.setGlobalPrefix('api');

  // enable versioning v1, v2, etc.
  app.enableVersioning({
    type: VersioningType.URI

  });

  // enable Swagginger
  const config = new DocumentBuilder()
    .setTitle('Crypto API')
    .setDescription('The Crypto API description')
    .setVersion('1.0')
    .addTag('crypto')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  await app.listen(3000);
}
bootstrap();
