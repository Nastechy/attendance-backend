import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';  
import { User } from 'src/models/dto/user.dto';



@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() createUserDto: any): Promise<User> {
    return this.userService.createUser(createUserDto);
  }

  @Get()
  async getAllUsers(): Promise<User[]> {
    return this.userService.getAllUsers();
  }

  @Get(':staffId')
  async getUserByStaffId(@Param('staffId') staffId: string): Promise<User | null> {
    return this.userService.getUserByStaffId(staffId);
  }
}
