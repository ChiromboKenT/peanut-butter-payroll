import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { LoggerService } from '../logger/logger.service';
@Injectable()
export class DbManagerService extends PrismaClient implements OnModuleInit {
  private prisma: PrismaClient;

  constructor(@Inject(LoggerService) private logger: LoggerService) {
    super();
  }

  async onModuleInit(): Promise<void> {
    await this.$connect();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.$on('query', async ({ query, params }) => {
      this.logger.debug('DB log', JSON.stringify({ query, params }));
    });
  }

  async upsert(id: number, body: any): Promise<boolean> {
    try {
      await this.user.upsert({
        where: { id },
        update: { ...body },
        create: { ...body },
      });
      return true;
    } catch (error) {
      this.logger.error(
        'Error with database upsert call',
        JSON.stringify({ stack: error?.stack, error: error?.message }),
      );
    }
  }

  async find<T>(id: number): Promise<T | undefined> {
    try {
      if (!id) {
        this.logger.debug(
          'Error with retrieve one database call',
          'ID can not be null',
        );
        return undefined;
      }

      const result = await this.user.findFirst({
        where: { id },
      });
      if (!result) return;
      return result as unknown as T;
    } catch (error) {
      this.logger.error(
        'Error with retrieve one database call',
        JSON.stringify({ stack: error?.stack, error: error?.message }),
      );
      return undefined;
    }
  }
  async findMany<T>(): Promise<T | undefined> {
    try {
      const result = await this.user.findMany();
      if (!result) return;
      return result as unknown as T;
    } catch (error) {
      this.logger.error(
        'Error with retrieve all database call',
        JSON.stringify({ stack: error?.stack, error: error?.message }),
      );
      return undefined;
    }
  }
  async delete(id: number): Promise<boolean> {
    try {
      await this.user.delete({
        where: {
          id,
        },
      });

      return true;
    } catch (error) {
      this.logger.error(
        'Error with delete database call',
        JSON.stringify({ stack: error?.stack, error: error?.message }),
      );
      return false;
    }
  }
}
