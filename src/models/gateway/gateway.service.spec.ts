import { Test } from '@nestjs/testing';
import { GatewayService } from '../gateway/gateway.service';
import { GatewayRepository } from '../gateway/gateway.repository';
const mockGatewayDate = {
  _id: { $oid: '60095524ebd6d705627b5f95' },
  name: 'string',
  ipv4: '19.117.63.126',
};
const mockGatewayRepository = () => ({
  findGateways: jest.fn(),
});

describe('GatewayService', () => {
  let gatewayService;
  let gatewayRepository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        GatewayService,
        { provide: GatewayRepository, useFactory: mockGatewayRepository },
      ],
    }).compile();
    gatewayService = module.get<GatewayService>(GatewayService);
    gatewayRepository = module.get<GatewayRepository>(GatewayRepository);
  });

  describe('gateways', () => {
    it(' should return gateway us', async () => {
      await gatewayRepository.findGateways.mockResolvedValue([mockGatewayDate]);
      const gateways = await gatewayService.findGateways();
      expect(gateways).toEqual(gateways);
    });
  });
});
