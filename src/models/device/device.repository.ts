import { DeleteResult, EntityRepository, Repository } from 'typeorm';
import { CreateDeviceDto } from './dtos/createDevice.dto';
import { Device } from './entities/device.entity';

@EntityRepository(Device)
export class DeviceRepository extends Repository<Device> {
  findDeviceById(id: string): Promise<Device> {
    return this.findOne(id);
  }

  findDevices(): Promise<Device[]> {
    return this.find();
  }

  createDevice(dto: CreateDeviceDto): Promise<Device> {
    return this.save(dto);
  }

  deleteDevice(id: string): Promise<DeleteResult> {
    return this.delete(id);
  }
}
