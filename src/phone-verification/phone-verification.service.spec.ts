import { Test, TestingModule } from '@nestjs/testing';

import { PhoneVerificationService } from './phone-verification.service';

describe('PhoneVerificationService', () => {
    let service: PhoneVerificationService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [PhoneVerificationService],
        }).compile();

        service = module.get<PhoneVerificationService>(
            PhoneVerificationService,
        );
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
