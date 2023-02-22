'use strict';
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d;
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.AppModule = void 0;
const common_1 = require('@nestjs/common');
const app_controller_1 = require('./app.controller');
const app_service_1 = require('./app.service');
const graphql_1 = require('@nestjs/graphql');
const users_module_1 = require('./users/users.module');
const typeorm_1 = require('@nestjs/typeorm');
const dotenv = require('dotenv');
dotenv.config();
let AppModule = class AppModule {};
AppModule = __decorate(
  [
    common_1.Module({
      imports: [
        graphql_1.GraphQLModule.forRoot({
          autoSchemaFile: './schema.gql',
          debug: true,
          playground: true,
        }),
        typeorm_1.TypeOrmModule.forRoot({
          keepConnectionAlive: true,
          type: 'postgres',
          host: process.env.DB_HOST,
          port: +process.env.DB_PORT,
          username: process.env.DB_USERNAME,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_DATABASE,
          autoLoadEntities: true,
          synchronize: false,
        }),
        users_module_1.UsersModule,
      ],
      controllers: [app_controller_1.AppController],
      providers: [app_service_1.AppService],
    }),
  ],
  AppModule,
);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
