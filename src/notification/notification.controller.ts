import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
  } from '@nestjs/common';
  import { NotificationService } from './notification.service';
  import { Notification } from 'src/models/schema/notification.schema';
import { CreateNotificationDto, UpdateNotificationDto } from 'src/models/dto/notification.dto';

  
  
  @Controller('notifications')
  export class NotificationController {
    constructor(private readonly notificationService: NotificationService) {}
  
    @Post()
    async create(@Body() createNotificationDto: CreateNotificationDto): Promise<Notification> {
      return this.notificationService.create(createNotificationDto);
    }
  
    @Get()
    async findAll(): Promise<Notification[]> {
      return this.notificationService.findAll();
    }
  
    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Notification> {
      return this.notificationService.findOne(id);
    }
  
    @Patch(':id')
    async update(
      @Param('id') id: string,
      @Body() updateNotificationDto: UpdateNotificationDto,
    ): Promise<Notification> {
      return this.notificationService.update(id, updateNotificationDto);
    }
  
    @Delete(':id')
    async remove(@Param('id') id: string): Promise<void> {
      return this.notificationService.remove(id);
    }
  }
  