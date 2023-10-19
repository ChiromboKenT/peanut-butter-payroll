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

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async findOne(@Param('id') id: string, @Res() res: Response): Promise<void> {
    const user = await this.userService.getUser(parseInt(id));
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

  @Post(':id')
  @HttpCode(HttpStatus.CREATED)
  async create(
    @Param('id') id: string,
    @Body() user: User,
    @Res() res: Response,
  ): Promise<void> {
    const createdUser = await this.userService.addUser(parseInt(id), user);
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

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  async update(
    @Param('id') id: string,
    @Body() user: User,
    @Res() res: Response,
  ): Promise<void> {
    const updatedUser = await this.userService.addUser(parseInt(id), user);
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

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: string, @Res() res: Response): Promise<void> {
    await this.userService.deleteUser(parseInt(id));
    res.status(HttpStatus.NO_CONTENT).send();
  }
}
