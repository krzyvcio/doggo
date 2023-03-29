import { MigrationInterface, QueryRunner } from "typeorm";

export class firstMigratnio1671683360193 implements MigrationInterface {
    name = "firstMigratnio1671683360193";

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "emailVerification" ("id" SERIAL NOT NULL, "token" character varying(21) NOT NULL, "userId" integer NOT NULL, "validUntil" TIMESTAMP NOT NULL, "isVerification" boolean NOT NULL DEFAULT false, "createdAt" TIMESTAMP DEFAULT ('now'::text)::timestamp(6) with time zone, "updatedAt" TIMESTAMP DEFAULT ('now'::text)::timestamp(6) with time zone, CONSTRAINT "PK_2382546f971f52418d861080fe1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "password_reset" ("id" SERIAL NOT NULL, "token" character varying(21) NOT NULL, "userId" character varying NOT NULL, "validUntil" TIMESTAMP NOT NULL, "isVerification" boolean NOT NULL DEFAULT false, "createdAt" TIMESTAMP DEFAULT ('now'::text)::timestamp(6) with time zone, "modifiedAt" TIMESTAMP DEFAULT ('now'::text)::timestamp(6) with time zone, CONSTRAINT "PK_8515e60a2cc41584fa4784f52ce" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "phoneVerification" ("id" SERIAL NOT NULL, "code" character varying(6) NOT NULL, "userId" integer NOT NULL, "validUntil" TIMESTAMP NOT NULL, "isVerification" boolean NOT NULL DEFAULT false, "createdAt" TIMESTAMP DEFAULT ('now'::text)::timestamp(6) with time zone, "modifiedAt" TIMESTAMP DEFAULT ('now'::text)::timestamp(6) with time zone, CONSTRAINT "PK_b7dfa760f38b0c9eb2781d26439" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "schedules" ("id" SERIAL NOT NULL, "name" character varying, "workDate" TIMESTAMP, "startHour" TIMESTAMP, "endHour" TIMESTAMP, "dayOfWeek" integer, "repeatDaysNumber" integer, "isHoliday" boolean NOT NULL, "isWeekend" boolean NOT NULL, "createdAt" TIMESTAMP DEFAULT ('now'::text)::timestamp(6) with time zone, "modifiedAt" TIMESTAMP DEFAULT ('now'::text)::timestamp(6) with time zone, CONSTRAINT "PK_7e33fc2ea755a5765e3564e66dd" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pet_owner" ("id" SERIAL NOT NULL, "rating" double precision NOT NULL, CONSTRAINT "PK_5116a00f46dd9097ed6bd8dd6a5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pet_walker" ("id" SERIAL NOT NULL, "rating" double precision NOT NULL, CONSTRAINT "PK_5260c910bb9b88432d47caaf89f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "profile" ("id" SERIAL NOT NULL, "bio" character varying NOT NULL, "profileType" character varying NOT NULL, "createdAt" TIMESTAMP DEFAULT ('now'::text)::timestamp(6) with time zone, "modifiedAt" TIMESTAMP DEFAULT ('now'::text)::timestamp(6) with time zone, CONSTRAINT "PK_3dd8bfc97e4a77c70971591bdcb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "username" character varying(200) NOT NULL, "email" character varying(100) NOT NULL, "passwordHash" character varying NOT NULL, "firstName" character varying(200) NOT NULL, "lastName" character varying(200) NOT NULL, "middleName" character varying(100), "image" character varying NOT NULL, "emailVerified" boolean NOT NULL DEFAULT false, "birthDate" TIMESTAMP, "phone" character varying NOT NULL, "registrationDate" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "roles" text NOT NULL, "isAccountDisabled" boolean NOT NULL, "age" integer NOT NULL, "createdAt" TIMESTAMP DEFAULT now(), "updatedAt" TIMESTAMP DEFAULT now(), CONSTRAINT "username" UNIQUE ("username"), CONSTRAINT "email" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "emailChange" ("id" SERIAL NOT NULL, "token" character varying(21) NOT NULL, "newEmail" character varying NOT NULL, "userId" integer NOT NULL, "validUntil" TIMESTAMP NOT NULL, "isVerification" boolean NOT NULL DEFAULT false, "createdAt" TIMESTAMP DEFAULT ('now'::text)::timestamp(6) with time zone, "modifiedAt" TIMESTAMP DEFAULT ('now'::text)::timestamp(6) with time zone, CONSTRAINT "PK_6e8e3dcd4d8e4cdea67b9e6c6c1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pet" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "type" integer NOT NULL DEFAULT '1', "birthDate" TIMESTAMP, "photo" character varying, "createdAt" TIMESTAMP DEFAULT ('now'::text)::timestamp(6) with time zone, "modifiedAt" TIMESTAMP DEFAULT ('now'::text)::timestamp(6) with time zone, CONSTRAINT "PK_b1ac2e88e89b9480e0c5b53fa60" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "pet"`);
        await queryRunner.query(`DROP TABLE "emailChange"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "profile"`);
        await queryRunner.query(`DROP TABLE "pet_walker"`);
        await queryRunner.query(`DROP TABLE "pet_owner"`);
        await queryRunner.query(`DROP TABLE "schedules"`);
        await queryRunner.query(`DROP TABLE "phoneVerification"`);
        await queryRunner.query(`DROP TABLE "password_reset"`);
        await queryRunner.query(`DROP TABLE "emailVerification"`);
    }

}
