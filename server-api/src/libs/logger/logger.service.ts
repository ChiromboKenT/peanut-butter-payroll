import {
  Injectable,
  LoggerService as NestLoggerService,
  LogLevel,
} from '@nestjs/common';

@Injectable()
export class LoggerService implements NestLoggerService {
  private readonly appName: string = 'Peanut Butter Payroll';

  log(message: string, context?: string) {
    this.printLog('log', message, context);
  }

  error(message: string, trace?: string, context?: string) {
    this.printLog('error', message, context, trace);
  }

  warn(message: string, context?: string) {
    this.printLog('warn', message, context);
  }

  debug(message: string, context?: string) {
    this.printLog('debug', message, context);
  }

  verbose(message: string, context?: string) {
    this.printLog('verbose', message, context);
  }

  private printLog(
    level: LogLevel,
    message: string,
    context?: string,
    trace?: string,
  ) {
    console.log(
      `[${this.appName}] [${level}] ${
        context ? `[${context}]` : ''
      } - ${message} ${trace ? `\n${trace}` : ''}`,
    );
  }
}
