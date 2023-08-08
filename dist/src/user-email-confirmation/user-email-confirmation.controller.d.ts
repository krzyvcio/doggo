import { UserEmailConfirmationService } from './user-email-confirmation.service';
export declare class UserEmailConfirmationController {
    private readonly userEmailConfirmationService;
    constructor(userEmailConfirmationService: UserEmailConfirmationService);
    verify(token: string): Promise<{
        message: string;
    }>;
}
