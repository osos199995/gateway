import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { DeviceService } from './device.service';
import { Device } from './entities/device.entity';
import { CreateDeviceDto } from './dtos/createDevice.dto';
import { DeleteResult } from 'typeorm';

@Controller('devices')
export class DeviceController {
  constructor(private deviceService: DeviceService) {}

  @Get()
  findDevices(): Promise<Device[]> {
    return this.deviceService.findDevices();
  }

  @Get(':id')
  findDeviceById(@Param('id') id: string): Promise<Device> {
    return this.deviceService.findDeviceById(id);
  }

  @Get(':id/gateway')
  findDeviceByGateWayId(@Param('id') id: string): Promise<Device[]> {
    return this.deviceService.findDeviceByGatewayId(id);
  }

  @Post()
  async create(@Body() createDeviceDto: CreateDeviceDto): Promise<Device> {
    return this.deviceService.createDevices(createDeviceDto);
  }

  @Delete(':id')
  deleteDevice(@Param('id') id: string): void {
    this.deviceService.deleteDevice(id);
  }
}
