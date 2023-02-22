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
var __metadata =
  (this && this.__metadata) ||
  function (k, v) {
    if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
      return Reflect.metadata(k, v);
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.User = void 0;
const graphql_1 = require('@nestjs/graphql');
const typeorm_1 = require('typeorm');
let User = class User {};
__decorate(
  [
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    graphql_1.Field(() => String, { description: 'id of the user' }),
    __metadata('design:type', String),
  ],
  User.prototype,
  'userId',
  void 0,
);
__decorate(
  [
    typeorm_1.Column('int'),
    graphql_1.Field(() => graphql_1.Int, {
      description: 'Example field (placeholder)',
    }),
    __metadata('design:type', Number),
  ],
  User.prototype,
  'exampleField',
  void 0,
);
__decorate(
  [
    typeorm_1.Column(),
    graphql_1.Field(() => String, { description: 'first name of the user' }),
    __metadata('design:type', String),
  ],
  User.prototype,
  'firstName',
  void 0,
);
__decorate(
  [
    typeorm_1.Column(),
    graphql_1.Field(() => String, { description: 'last name of the user' }),
    __metadata('design:type', String),
  ],
  User.prototype,
  'lastName',
  void 0,
);
__decorate(
  [
    typeorm_1.Column(),
    graphql_1.Field(() => String, { description: 'email of the user' }),
    __metadata('design:type', String),
  ],
  User.prototype,
  'email',
  void 0,
);
__decorate(
  [
    typeorm_1.Column({ nullable: true }),
    graphql_1.Field(() => String, { description: 'role of the user' }),
    __metadata('design:type', String),
  ],
  User.prototype,
  'role',
  void 0,
);
User = __decorate([typeorm_1.Entity(), graphql_1.ObjectType()], User);
exports.User = User;
//# sourceMappingURL=user.entity.js.map
