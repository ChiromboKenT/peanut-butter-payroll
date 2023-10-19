import { Inject, Injectable } from '@nestjs/common';
import { User } from './user';
import { LoggerService } from '../../libs/logger/logger.service';
import { DbManagerService } from 'src/libs/db-manager/db-manager.service';
import JSONbig from 'json-bigint';

@Injectable()
export class UserService {
  private readonly users: User[] = [];
  constructor(
    @Inject(LoggerService) private readonly logger: LoggerService,
    @Inject(DbManagerService) private readonly db: DbManagerService,
  ) {}

  async getAllUsers(): Promise<User[]> {
    try {
      this.logger.log('Fetching all users');
      const users = await this.db.findMany<User[]>();
      return users as User[];
    } catch (error) {
      this.logger.error('Error fetching all users', error);
      throw error;
    }
  }

  async getUser(employeeNumber: BigInt): Promise<User | null> {
    try {
      this.logger.log(`Fetching user with ID: ${JSONbig.stringify(employeeNumber)}`);
      const user = await this.db.find<User>(employeeNumber);
      return user as User;
    } catch (error) {
      this.logger.error(`Error fetching user with ID: ${JSONbig.stringify(employeeNumber)}`, error);
      throw error;
    }
  }

  async addUser( user: Partial<User>): Promise<boolean> {
    try {
      this.logger.log(`Adding user: ${user}`);
      const newUser = await this.db.upsert(user?.employeeNumber, user);
      return newUser;
    } catch (error) {
      this.logger.error('Error adding user', error);
      throw error;
    }
  }
  async updateUser(employeeNumber: BigInt, user: Partial<User>): Promise<boolean> {
    try {
      this.logger.log(`Adding user: ${user}`);
      const newUser = await this.db.upsert(employeeNumber, user);
      return newUser;
    } catch (error) {
      this.logger.error('Error adding user', error);
      throw error;
    }
  }

  async deleteUser(employeeNumber: BigInt): Promise<boolean> {
    try {
      this.logger.log(`Deleting user with ID: ${JSONbig.stringify(employeeNumber)}`);
      const isDeleted = await this.db.delete(employeeNumber);
      return isDeleted;
    } catch (error) {
      this.logger.error(`Error deleting user with ID: ${JSONbig.stringify(employeeNumber)}`, error);
      throw error;
    }
  }
}
