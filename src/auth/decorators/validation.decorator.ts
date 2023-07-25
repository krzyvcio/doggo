import { Validate, ValidationArguments } from 'class-validator';

export function IsAtLeastOnePropertySet(validationProperties: string[]) {
    return function (object: Record<string, any>, propertyName: string) {
        class IsAtLeastOnePropertySetConstraint {
            validate(value: any) {
                return validationProperties.some(
                    (property) => property in value,
                );
            }

            defaultMessage(
                args: ValidationArguments & { constraints: string[] },
            ) {
                return `At least on of ${args.constraints.join(
                    ', ',
                )} should be set.`;
            }
        }

        Validate(IsAtLeastOnePropertySetConstraint, validationProperties, {
            message: `At least one of ${validationProperties.join(
                ', ',
            )} should be set.`,
        })(object, propertyName);
    };
}
