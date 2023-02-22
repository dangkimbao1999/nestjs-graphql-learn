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
var __param =
  (this && this.__param) ||
  function (paramIndex, decorator) {
    return function (target, key) {
      decorator(target, key, paramIndex);
    };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.UsersService = void 0;
const common_1 = require('@nestjs/common');
const user_entity_1 = require('../database/entities/user.entity');
const typeorm_1 = require('@nestjs/typeorm');
const typeorm_2 = require('typeorm');
let UsersService = class UsersService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }
  async create(createUserInput) {
    const user = this.userRepository.create(createUserInput);
    return await this.userRepository.save(user);
  }
  async findAll() {
    return await this.userRepository.find();
  }
  async findOne(userId) {
    const user = await this.userRepository.findOne(userId);
    if (!user) {
      throw new common_1.NotFoundException(`User #${userId} not found`);
    }
    return user;
  }
  async update(userId, updateUserInput) {
    const user = await this.userRepository.preload(
      Object.assign({ userId: userId }, updateUserInput),
    );
    if (!user) {
      throw new common_1.NotFoundException(`User #${userId} not found`);
    }
    return this.userRepository.save(user);
  }
  async remove(userId) {
    const user = await this.findOne(userId);
    await this.userRepository.remove(user);
    return {
      userId: userId,
      firstName: '',
      lastName: '',
      email: '',
      role: '',
      exampleField: 0,
    };
  }
};
UsersService = __decorate(
  [
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(user_entity_1.User)),
    __metadata('design:paramtypes', [typeorm_2.Repository]),
  ],
  UsersService,
);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map
