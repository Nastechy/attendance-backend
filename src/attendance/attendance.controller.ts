import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
  } from '@nestjs/common';
  import { AttendanceService } from './attendance.service';
  import { Attendance } from 'src/models/schema/attendance.schema';
import { CreateAttendanceDto, UpdateAttendanceDto } from 'src/models/dto/attendance.dto';

  
  @Controller('attendances')
  export class AttendanceController {
    constructor(private readonly attendanceService: AttendanceService) {}
  
    @Post()
    async create(@Body() createAttendanceDto: CreateAttendanceDto): Promise<Attendance> {
      return this.attendanceService.create(createAttendanceDto);
    }
  
    @Get()
    async findAll(): Promise<Attendance[]> {
      return this.attendanceService.findAll();
    }
  
    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Attendance> {
      return this.attendanceService.findOne(id);
    }
  
    @Patch(':id')
    async update(
      @Param('id') id: string,
      @Body() updateAttendanceDto: UpdateAttendanceDto,
    ): Promise<Attendance> {
      return this.attendanceService.update(id, updateAttendanceDto);
    }
  
    @Delete(':id')
    async remove(@Param('id') id: string): Promise<void> {
      return this.attendanceService.remove(id);
    }
  }
  