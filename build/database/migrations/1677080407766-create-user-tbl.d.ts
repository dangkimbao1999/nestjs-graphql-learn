import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class createUserTbl1677080407766 implements MigrationInterface {
  name: string;
  up(queryRunner: QueryRunner): Promise<void>;
  down(queryRunner: QueryRunner): Promise<void>;
}
