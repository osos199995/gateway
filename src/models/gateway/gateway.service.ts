import { Injectable } from '@nestjs/common';
import { GatewayRepository } from './gateway.repository';
import { Gateway } from './entities/gateway.entity';
import { CreateGatewayDto } from './dtos/createGateway.dto';
import * as crypto from 'crypto';

@Injectable()
export class GatewayService {
  constructor(private gatewayRepository: GatewayRepository) {}

  findGateways(): Promise<Gateway[]> {
    return this.gatewayRepository.findGateways();
  }

  findGatewayById(id: string): Promise<Gateway> {
    return this.gatewayRepository.findGatewayById(id);
  }
  deleteGateway(id: string): void {
    return this.gatewayRepository.deleteGateway(id);
  }

  async createGateways(createGatewayDto: CreateGatewayDto): Promise<Gateway> {
    const gateway = this.gatewayRepository.create({
      ...createGatewayDto,
      serialNo: await this.serialGenerator(),
    });
    return this.gatewayRepository.createGateway(gateway);
  }

  private async serialGenerator() {
    const serial = crypto.randomBytes(16).toString('hex');
    const gateway = await this.gatewayRepository.findOne({ serialNo: serial });
    if (!gateway) return serial;
    await this.serialGenerator();
  }
}
