import { MigrationInterface, QueryRunner } from "typeorm";

export class profiles1690266284796 implements MigrationInterface {
    name = 'profiles1690266284796'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "profileId" integer`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "profileId"`);
    }

}
