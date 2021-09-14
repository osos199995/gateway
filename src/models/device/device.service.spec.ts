import { Test } from '@nestjs/testing';
import { DeviceRepository } from './device.repository';
import { DeviceService } from './device.service';
import { GatewayService } from '../gateway/gateway.service';
import { GatewayRepository } from '../gateway/gateway.repository';
const mockDeviceDate = {
  _id: { $oid: '60095524ebd6d705627b5f95' },
  name: 'string',
  ipv4: '19.117.63.126',
};
const mockDeviceRepository = () => ({
  findDevices: jest.fn(),
});

describe('DeviceService', () => {
  let deviceService;
  let deviceRepository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        DeviceService,
        { provide: DeviceRepository, useFactory: mockDeviceRepository },
        GatewayService,
        { provide: GatewayRepository, useFactory: mockDeviceRepository },
      ],
    }).compile();
    deviceService = module.get<DeviceService>(DeviceService);
    deviceRepository = module.get<DeviceRepository>(DeviceRepository);
  });

  describe('devices', () => {
    it(' should return gateway us', async () => {
      await deviceRepository.findDevices.mockResolvedValue([mockDeviceDate]);
      const devices = await deviceService.findDevices();
      expect(devices).toEqual(devices);
    });
  });
});
