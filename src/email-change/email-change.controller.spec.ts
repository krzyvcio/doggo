import { Test, TestingModule } from '@nestjs/testing';

import { EmailChangeController } from './email-change.controller';
import { EmailChangeService } from './email-change.service';

describe('EmailChangeController', () => {
    let controller: EmailChangeController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [EmailChangeController],
            providers: [EmailChangeService],
        }).compile();

        controller = module.get<EmailChangeController>(EmailChangeController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
