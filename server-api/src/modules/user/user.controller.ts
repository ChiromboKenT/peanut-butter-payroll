import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  HttpCode,
  HttpStatus,
  Res,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user';
import { Response } from 'express';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll(@Res() res: Response): Promise<void> {
    const users = await this.userService.getAllUsers();
    res.status(HttpStatus.OK).json({
      data: users,
      message: 'All users fetched successfully',
    });
  }

  @Get(':employeeNumber')
  @HttpCode(HttpStatus.OK)
  async findOne(@Param('employeeNumber') employeeNumber: string, @Res() res: Response): Promise<void> {
    const user = await this.userService.getUser(BigInt(employeeNumber));
    if (user) {
      res.status(HttpStatus.OK).json({
        data: user,
        message: 'User fetched successfully',
      });
    } else {
      res.status(HttpStatus.NOT_FOUND).json({
        message: 'User not found',
      });
    }
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(
    @Body() user: User,
    @Res() res: Response,
  ): Promise<void> {
    const createdUser = await this.userService.addUser(user);
    if (createdUser) {
      res.status(HttpStatus.CREATED).json({
        data: createdUser,
        message: 'User created successfully',
      });
    } else {
      res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Failed to create user',
      });
    }
  }

  @Put(':employeeNumber')
  @HttpCode(HttpStatus.OK)
  async update(
    @Param('employeeNumber') employeeNumber: string,
    @Body() user: User,
    @Res() res: Response,
  ): Promise<void> {
    const updatedUser = await this.userService.updateUser(BigInt(employeeNumber), user);
    if (updatedUser) {
      res.status(HttpStatus.OK).json({
        data: updatedUser,
        message: 'User updated successfully',
      });
    } else {
      res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Failed to update user',
      });
    }
  }

  @Delete(':employeeNumber')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('employeeNumber') employeeNumber: string, @Res() res: Response): Promise<void> {
    await this.userService.deleteUser(BigInt(employeeNumber));
    res.status(HttpStatus.NO_CONTENT).send();
  }
}
