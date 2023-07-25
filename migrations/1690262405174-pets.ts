import { MigrationInterface, QueryRunner } from 'typeorm';

export class pets1690262405174 implements MigrationInterface {
    name = 'pets1690262405174';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "profiles" ("id" BIGSERIAL NOT NULL, "bio" character varying, "userId" integer NOT NULL, "petOwnerId" integer, "petPatronId" integer, "createdAt" TIMESTAMP DEFAULT ('now'::text)::timestamp(6) with time zone, "updatedAt" TIMESTAMP DEFAULT ('now'::text)::timestamp(6) with time zone, CONSTRAINT "PK_8e520eb4da7dc01d0e190447c8e" PRIMARY KEY ("id"))`,
        );
        await queryRunner.query(
            `ALTER TABLE "pet_owner" ADD "userId" integer NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "pet_owner" ADD "profileId" integer NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "pet_patron" ADD "userId" integer NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "pet_patron" ADD "profileId" integer NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "pet_owner" DROP CONSTRAINT "PK_5116a00f46dd9097ed6bd8dd6a5"`,
        );
        await queryRunner.query(`ALTER TABLE "pet_owner" DROP COLUMN "id"`);
        await queryRunner.query(
            `ALTER TABLE "pet_owner" ADD "id" BIGSERIAL NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "pet_owner" ADD CONSTRAINT "PK_5116a00f46dd9097ed6bd8dd6a5" PRIMARY KEY ("id")`,
        );
        await queryRunner.query(
            `ALTER TABLE "pet_owner" ALTER COLUMN "rating" DROP NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "pet_patron" ALTER COLUMN "rating" DROP NOT NULL`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "pet_patron" ALTER COLUMN "rating" SET NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "pet_owner" ALTER COLUMN "rating" SET NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "pet_owner" DROP CONSTRAINT "PK_5116a00f46dd9097ed6bd8dd6a5"`,
        );
        await queryRunner.query(`ALTER TABLE "pet_owner" DROP COLUMN "id"`);
        await queryRunner.query(
            `ALTER TABLE "pet_owner" ADD "id" SERIAL NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "pet_owner" ADD CONSTRAINT "PK_5116a00f46dd9097ed6bd8dd6a5" PRIMARY KEY ("id")`,
        );
        await queryRunner.query(
            `ALTER TABLE "pet_patron" DROP COLUMN "profileId"`,
        );
        await queryRunner.query(
            `ALTER TABLE "pet_patron" DROP COLUMN "userId"`,
        );
        await queryRunner.query(
            `ALTER TABLE "pet_owner" DROP COLUMN "profileId"`,
        );
        await queryRunner.query(`ALTER TABLE "pet_owner" DROP COLUMN "userId"`);
        await queryRunner.query(`DROP TABLE "profiles"`);
    }
}
