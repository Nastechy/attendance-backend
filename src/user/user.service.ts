import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/models/dto/user.dto';


@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<User>,  
    
  ) {}

  async createUser(createUserDto: any): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  async getAllUsers(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async getUserByStaffId(staffId: string): Promise<User | null> {
    return this.userModel.findOne({ staffId }).exec();
  }
}
