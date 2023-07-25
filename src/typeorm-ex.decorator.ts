import { SetMetadata } from '@nestjs/common';
import { EntityTarget } from 'typeorm';

export const TYPEORM_EX_CUSTOM_REPOSITORY = 'TYPEORM_EX_CUSTOM_REPOSITORY';

export function CustomRepository<T>(entity: EntityTarget<T>): ClassDecorator {
    return SetMetadata(TYPEORM_EX_CUSTOM_REPOSITORY, entity);
}
