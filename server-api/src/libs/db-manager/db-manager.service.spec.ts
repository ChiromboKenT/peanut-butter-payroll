import { Test, TestingModule } from '@nestjs/testing';
import { DbManagerService } from './db-manager.service';
import { LoggerService } from '../logger/logger.service';
import { PrismaClient } from '@prisma/client';
import { User } from 'src/modules/user/user';

// Mock LoggerService
const mockLoggerService = {
  debug: jest.fn(),
  error: jest.fn(),
};

// Mock PrismaClient
const mockPrismaClient = {
  $connect: jest.fn(),
  $on: jest.fn(),
  user: {
    upsert: jest.fn(),
    findFirst: jest.fn(),
    findMany: jest.fn(),
    delete: jest.fn(),
  },
};

describe('DbManagerService', () => {
  let service: DbManagerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DbManagerService,
        { provide: LoggerService, useValue: mockLoggerService },
        { provide: PrismaClient, useValue: mockPrismaClient },
      ],
    }).compile();

    service = module.get<DbManagerService>(DbManagerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('upsert', () => {
    it('should return true on successful upsert', async () => {
      mockPrismaClient.user.upsert.mockResolvedValueOnce(true);
      const result = await service.upsert(1, { name: 'John' });
      expect(result).toBe(true);
    });

    it('should log an error on failed upsert', async () => {
      mockPrismaClient.user.upsert.mockRejectedValueOnce(
        new Error('An error occurred'),
      );
      const result = await service.upsert(1, { name: 'John' });
      expect(result).toBeUndefined();
      expect(mockLoggerService.error).toHaveBeenCalledWith(
        'Error with database upsert call',
        expect.any(String),
      );
    });
  });

  describe('find', () => {
    it('should return a user on successful find', async () => {
      const user: User = {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        salutation: 'DR',
        gender: 'MALE',
        employeeNumber: BigInt(56753443),
        salary: BigInt(56753443),
        colour: 'green',
      };
      mockPrismaClient.user.findFirst.mockResolvedValueOnce(user);
      const result = await service.find<User>(1);
      expect(result).toEqual(user);
    });

    it('should log an error on failed find', async () => {
      mockPrismaClient.user.findFirst.mockRejectedValueOnce(
        new Error('An error occurred'),
      );
      const result = await service.find<User>(1);
      expect(result).toBeUndefined();
      expect(mockLoggerService.error).toHaveBeenCalledWith(
        'Error with retrieve one database call',
        expect.any(String),
      );
    });
  });

  describe('findMany', () => {
    it('should return users on successful findMany', async () => {
      const users: User[] = [
        {
          id: 1,
          firstName: 'John',
          lastName: 'Doe',
          salutation: 'DR',
          gender: 'MALE',
          employeeNumber: BigInt(56753443),
          salary: BigInt(56753443),
          colour: 'green',
        },
        {
          id: 2,
          firstName: 'John',
          lastName: 'Doe',
          salutation: 'DR',
          gender: 'MALE',
          employeeNumber: BigInt(56753444),
          salary: BigInt(10000),
          colour: 'green',
        },
      ];
      mockPrismaClient.user.findMany.mockResolvedValueOnce(users);
      const result = await service.findMany<User[]>();
      expect(result).toEqual(users);
    });

    it('should log an error on failed findMany', async () => {
      mockPrismaClient.user.findMany.mockRejectedValueOnce(
        new Error('An error occurred'),
      );
      const result = await service.findMany<User[]>();
      expect(result).toBeUndefined();
      expect(mockLoggerService.error).toHaveBeenCalledWith(
        'Error with retrieve all database call',
        expect.any(String),
      );
    });
  });

  describe('delete', () => {
    it('should return true on successful delete', async () => {
      mockPrismaClient.user.delete.mockResolvedValueOnce(true);
      const result = await service.delete(1);
      expect(result).toBe(true);
    });

    it('should log an error on failed delete', async () => {
      mockPrismaClient.user.delete.mockRejectedValueOnce(
        new Error('An error occurred'),
      );
      const result = await service.delete(1);
      expect(result).toBe(false);
      expect(mockLoggerService.error).toHaveBeenCalledWith(
        'Error with delete database call',
        expect.any(String),
      );
    });
  });
});
