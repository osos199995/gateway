import { Module } from '@nestjs/common';
import { GatewayService } from './gateway.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GatewayRepository } from './gateway.repository';
import { GatewayController } from './gateway.controller';

@Module({
  imports: [TypeOrmModule.forFeature([GatewayRepository])],
  providers: [GatewayService],
  controllers: [GatewayController],
  exports: [GatewayService],
})
export class GatewayModule {}
