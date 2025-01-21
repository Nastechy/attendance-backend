import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAttendanceDto, UpdateAttendanceDto } from 'src/models/dto/attendance.dto';
import { Attendance, AttendanceDocument } from 'src/models/schema/attendance.schema';



@Injectable()
export class AttendanceService {
  constructor(
    @InjectModel(Attendance.name) private readonly attendanceModel: Model<AttendanceDocument>,
  ) {}

  async create(createAttendanceDto: CreateAttendanceDto): Promise<Attendance> {
    const attendance = new this.attendanceModel(createAttendanceDto);
    return attendance.save();
  }

  async findAll(): Promise<Attendance[]> {
    return this.attendanceModel.find().populate('userId locationId').exec();
  }

  async findOne(id: string): Promise<Attendance> {
    const attendance = await this.attendanceModel.findById(id).populate('userId locationId').exec();
    if (!attendance) {
      throw new NotFoundException(`Attendance with ID "${id}" not found`);
    }
    return attendance;
  }

  async update(id: string, updateAttendanceDto: UpdateAttendanceDto): Promise<Attendance> {
    const updatedAttendance = await this.attendanceModel
      .findByIdAndUpdate(id, updateAttendanceDto, { new: true })
      .exec();
    if (!updatedAttendance) {
      throw new NotFoundException(`Attendance with ID "${id}" not found`);
    }
    return updatedAttendance;
  }

  async remove(id: string): Promise<void> {
    const result = await this.attendanceModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Attendance with ID "${id}" not found`);
    }
  }
}
