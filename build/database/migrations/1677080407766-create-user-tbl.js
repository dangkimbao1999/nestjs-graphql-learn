'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.createUserTbl1677080407766 = void 0;
class createUserTbl1677080407766 {
  constructor() {
    this.name = 'createUserTbl1677080407766';
  }
  async up(queryRunner) {
    await queryRunner.query(
      `CREATE TABLE "user" ("userId" uuid NOT NULL DEFAULT uuid_generate_v4(), "exampleField" integer NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "email" character varying NOT NULL, "role" character varying, CONSTRAINT "PK_d72ea127f30e21753c9e229891e" PRIMARY KEY ("userId"))`,
    );
  }
  async down(queryRunner) {
    await queryRunner.query(`DROP TABLE "user"`);
  }
}
exports.createUserTbl1677080407766 = createUserTbl1677080407766;
//# sourceMappingURL=1677080407766-create-user-tbl.js.map
