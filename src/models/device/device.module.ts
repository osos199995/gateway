import { Module } from '@nestjs/common';
import { DeviceService } from './device.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeviceRepository } from './device.repository';
import { DeviceController } from './device.controller';
import { GatewayModule } from '../gateway/gateway.module';

@Module({
  imports: [TypeOrmModule.forFeature([DeviceRepository]), GatewayModule],
  providers: [DeviceService],
  controllers: [DeviceController],
  exports: [DeviceService],
})
export class DeviceModule {}
