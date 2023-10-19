import { Test, TestingModule } from '@nestjs/testing';
import { LoggerService } from './logger.service';

describe('LoggerService', () => {
  let service: LoggerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoggerService],
    }).compile();

    service = module.get<LoggerService>(LoggerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should log a message', () => {
    const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();
    service.log('Test log message');
    expect(consoleLogSpy).toHaveBeenCalledWith(
      expect.stringContaining('Test log message'),
    );
    consoleLogSpy.mockRestore();
  });

  // Add more tests for error, warn, debug, verbose methods
});
