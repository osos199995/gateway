import { Module } from '@nestjs/common';
import { MongoDatabaseProviderModule } from './providers/database/mongo/provider.module';
import { GatewayModule } from './models/gateway/gateway.module';
import { AppConfigModule } from './config/app/config.module';
import { DeviceModule } from './models/device/device.module';

@Module({
  imports: [
    MongoDatabaseProviderModule,
    GatewayModule,
    AppConfigModule,
    DeviceModule,
  ],
  providers: [],
})
export class AppModule {}
