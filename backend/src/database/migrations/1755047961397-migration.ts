import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1755047961397 implements MigrationInterface {
    name = 'Migration1755047961397'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "addresses" ("id" character varying NOT NULL, "zipcode" character varying NOT NULL, "publicPlace" character varying NOT NULL, "neighborhood" character varying NOT NULL, "number" integer, "uf" character varying NOT NULL, "state" character varying NOT NULL, "complement" character varying, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_745d8f43d3af10ab8247465e450" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "addresses"`);
    }

}
