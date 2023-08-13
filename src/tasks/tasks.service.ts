import {
    Injectable,
    Logger,
} from '@nestjs/common';
import {
    Cron,
    CronExpression,
} from '@nestjs/schedule';

@Injectable()
export class TasksService {
    private readonly logger = new Logger(
        TasksService.name,
    );

    //TODO: Use later for notifications
    // @Cron('5 * * * * *')
    @Cron(CronExpression.EVERY_5_MINUTES)
    handleCron() {
        this.logger.debug(
            '[TEST] Called when the 5 hours elapsed',
        );
    }
}
