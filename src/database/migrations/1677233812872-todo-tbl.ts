import { MigrationInterface, QueryRunner } from 'typeorm';

export class todoTbl1677233812872 implements MigrationInterface {
  name = 'todoTbl1677233812872';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "todo" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "content" character varying NOT NULL, "updated_by" character varying(500), "created_at" TIMESTAMP WITH TIME ZONE DEFAULT now(), "userUserId" uuid, CONSTRAINT "PK_d429b7114371f6a35c5cb4776a7" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(`ALTER TABLE "public"."user" ADD "todosId" uuid`);
    await queryRunner.query(
      `ALTER TABLE "public"."user" ADD CONSTRAINT "FK_d046a5aee614ec3510af89926e2" FOREIGN KEY ("todosId") REFERENCES "todo"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "todo" ADD CONSTRAINT "FK_5748feca24ec2432fc99f68b9dd" FOREIGN KEY ("userUserId") REFERENCES "user"("userId") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "todo" DROP CONSTRAINT "FK_5748feca24ec2432fc99f68b9dd"`,
    );
    await queryRunner.query(
      `ALTER TABLE "public"."user" DROP CONSTRAINT "FK_d046a5aee614ec3510af89926e2"`,
    );
    await queryRunner.query(
      `ALTER TABLE "public"."user" DROP COLUMN "todosId"`,
    );
    await queryRunner.query(`DROP TABLE "todo"`);
  }
}
