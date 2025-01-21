import { IsEnum, IsNotEmpty, IsObject, IsOptional, IsString } from 'class-validator';
import { Types } from 'mongoose';
import { PunctualityType } from 'src/enums/attendance.enum';

export class Geometry {
  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsString()
  lat: string;

  @IsNotEmpty()
  @IsString()
  long: string;

  @IsOptional()
  @IsString()
  state?: string;
}

export class CreateAttendanceDto {
  @IsNotEmpty()
  userId: Types.ObjectId;

  @IsNotEmpty()
  @IsObject()
  geometry: Geometry;

  @IsNotEmpty()
  @IsString()
  time: string;

  @IsNotEmpty()
  @IsEnum(PunctualityType)
  punctuality: PunctualityType;

  @IsNotEmpty()
  locationId: Types.ObjectId;
}

export class UpdateAttendanceDto {
  @IsOptional()
  userId?: Types.ObjectId;

  @IsOptional()
  @IsObject()
  geometry?: Geometry;

  @IsOptional()
  @IsString()
  time?: string;

  @IsOptional()
  @IsEnum(PunctualityType)
  punctuality: PunctualityType;

  @IsOptional()
  locationId?: Types.ObjectId;
}
