import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/models/schema/user.schema';
import { CreateUserDto } from 'src/models/dto/user.dto';


@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) { }

  async createUser(createUserDto: CreateUserDto): Promise<UserDocument> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  async getAllUsers(): Promise<UserDocument[]> {
    return this.userModel.find().exec();
  }

  async getUserByStaffId(staffId: string): Promise<UserDocument | null> {
    return this.userModel.findOne({ staffId }).exec();
  }

  async findByEmail(email: string): Promise<UserDocument | null> {
    return this.userModel.findOne({ email }).exec();
  }
}
