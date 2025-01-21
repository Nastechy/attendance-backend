import { IsArray, IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Types } from 'mongoose';
import { NotificationType } from 'src/enums/notification.enum';



export class CreateNotificationDto {
  @IsNotEmpty()
  @IsEnum(NotificationType)
  type: NotificationType;

  @IsNotEmpty()
  @IsArray()
  userIds: Types.ObjectId[];

  @IsNotEmpty()
  @IsString()
  body: string;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsOptional()
  @IsArray()
  readUsers?: Types.ObjectId[];
}

export class UpdateNotificationDto {
  @IsOptional()
  @IsEnum(NotificationType)
  type?: NotificationType;

  @IsOptional()
  @IsArray()
  userIds?: Types.ObjectId[];

  @IsOptional()
  @IsString()
  body?: string;

  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsArray()
  readUsers?: Types.ObjectId[];
}
