import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from 'src/models/dto/user.dto';
import { UserDocument } from 'src/models/schema/user.schema';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<UserDocument> {
    return this.userService.createUser(createUserDto);
  }

  @Get()
  async getAllUsers(): Promise<UserDocument[]> {
    return this.userService.getAllUsers();
  }

  @Get(':staffId')
  async getUserByStaffId(@Param('staffId') staffId: string): Promise<UserDocument | null> {
    return this.userService.getUserByStaffId(staffId);
  }
}
