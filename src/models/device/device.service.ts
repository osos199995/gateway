import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { DeviceRepository } from './device.repository';
import { Device } from './entities/device.entity';
import { CreateDeviceDto } from './dtos/createDevice.dto';
import { GatewayService } from '../gateway/gateway.service';
import { DeleteResult } from 'typeorm';

@Injectable()
export class DeviceService {
  constructor(
    private deviceRepository: DeviceRepository,
    private gatewayService: GatewayService,
  ) {}

  findDevices(): Promise<Device[]> {
    return this.deviceRepository.findDevices();
  }

  findDeviceById(id: string): Promise<Device> {
    return this.deviceRepository.findDeviceById(id);
  }

  findDeviceByGatewayId(id: string): Promise<Device[]> {
    return this.deviceRepository.find({ gatewayId: id });
  }
  async createDevices(createDeviceDto: CreateDeviceDto): Promise<Device> {
    const gateway = await this.gatewayService.findGatewayById(
      createDeviceDto.gatewayId,
    );
    const count = await this.deviceRepository.count({
      gatewayId: createDeviceDto.gatewayId,
    });
    if (count >= 10)
      throw new BadRequestException("devices can't be more than 10");
    if (!gateway) throw new NotFoundException('No such gateway');
    return this.deviceRepository.createDevice(createDeviceDto);
  }

  deleteDevice(id: string): Promise<DeleteResult> {
    return this.deviceRepository.deleteDevice(id);
  }
}
