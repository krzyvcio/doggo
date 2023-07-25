import { Test, TestingModule } from '@nestjs/testing';

import { EmailChangeService } from './email-change.service';

describe('EmailChangeService', () => {
    let service: EmailChangeService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [EmailChangeService],
        }).compile();

        service = module.get<EmailChangeService>(EmailChangeService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
