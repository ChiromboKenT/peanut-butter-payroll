import { Inject, Injectable } from '@nestjs/common';
import { User } from './user';
import { LoggerService } from '../../libs/logger/logger.service';
import { DbManagerService } from 'src/libs/db-manager/db-manager.service';

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

  async getUser(id: number): Promise<User | null> {
    try {
      this.logger.log(`Fetching user with ID: ${id}`);
      const user = await this.db.find<User>(id);
      return user as User;
    } catch (error) {
      this.logger.error(`Error fetching user with ID: ${id}`, error);
      throw error;
    }
  }

  async addUser(id: number, user: Partial<User>): Promise<boolean> {
    try {
      this.logger.log(`Adding user: ${user}`);
      const newUser = await this.db.upsert(id, user);
      return newUser;
    } catch (error) {
      this.logger.error('Error adding user', error);
      throw error;
    }
  }

  async deleteUser(id: number): Promise<boolean> {
    try {
      this.logger.log(`Deleting user with ID: ${id}`);
      const isDeleted = await this.db.delete(id);
      return isDeleted;
    } catch (error) {
      this.logger.error(`Error deleting user with ID: ${id}`, error);
      throw error;
    }
  }
}
