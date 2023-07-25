import { MigrationInterface, QueryRunner } from "typeorm";

export class userChangesOther1690244386176 implements MigrationInterface {
    name = 'userChangesOther1690244386176'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "name" character varying(200) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "roles" SET DEFAULT '["USER"]'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "roles" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "name"`);
    }

}
