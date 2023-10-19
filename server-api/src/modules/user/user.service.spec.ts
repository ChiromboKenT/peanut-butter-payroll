import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { User } from './user';

describe('UserService', () => {
  let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService],
    }).compile();

    userService = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(userService).toBeDefined();
  });

  describe('getAllUsers', () => {
    it('should return an array of users', async () => {});
  });

  describe('getUser', () => {
    it('should return a single user', async () => {});
  });

  describe('addUser', () => {
    it('should add a user', async () => {});
  });

  describe('updateUserDetails', () => {
    it('should update the details of a user', async () => {});
  });

  describe('deleteUser', () => {
    it('should delete a user', async () => {});
  });
});
