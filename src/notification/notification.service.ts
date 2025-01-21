import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateNotificationDto, UpdateNotificationDto } from 'src/models/dto/notification.dto';
import { Notification, NotificationDocument } from 'src/models/schema/notification.schema';



@Injectable()
export class NotificationService {
  constructor(
    @InjectModel(Notification.name)
    private readonly notificationModel: Model<NotificationDocument>,
  ) {}

  async create(createNotificationDto: CreateNotificationDto): Promise<Notification> {
    const notification = new this.notificationModel(createNotificationDto);
    return notification.save();
  }

  async findAll(): Promise<Notification[]> {
    return this.notificationModel.find().populate('userIds readUsers').exec();
  }

  async findOne(id: string): Promise<Notification> {
    const notification = await this.notificationModel.findById(id).populate('userIds readUsers').exec();
    if (!notification) {
      throw new NotFoundException(`Notification with ID "${id}" not found`);
    }
    return notification;
  }

  async update(id: string, updateNotificationDto: UpdateNotificationDto): Promise<Notification> {
    const updatedNotification = await this.notificationModel
      .findByIdAndUpdate(id, updateNotificationDto, { new: true })
      .exec();
    if (!updatedNotification) {
      throw new NotFoundException(`Notification with ID "${id}" not found`);
    }
    return updatedNotification;
  }

  async remove(id: string): Promise<void> {
    const result = await this.notificationModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Notification with ID "${id}" not found`);
    }
  }
}
