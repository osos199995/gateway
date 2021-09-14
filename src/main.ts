import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppConfigService } from './config/app/config.service';
import { Logger, ValidationPipe } from '@nestjs/common';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Get app config for cors settings and starting the app.
  app.useGlobalPipes(new ValidationPipe());
  const appConfig: AppConfigService = app.get('AppConfigService');
  await app.listen(appConfig.port);
  const logger = new Logger();
  logger.log('application starts on port:' + appConfig.port);
}
bootstrap();
