import { IsEnum, IsNotEmpty, IsOptional, IsString, IsObject } from 'class-validator';
import { Types } from 'mongoose';
import { LocationType } from 'src/enums/location.enum';

export class GeometryDto {
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

export class CreateLocationDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEnum(LocationType)
  type: LocationType;

  @IsNotEmpty()
  companyId: Types.ObjectId;

  @IsNotEmpty()
  @IsObject()
  geometry: GeometryDto;
}

export class UpdateLocationDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsEnum(LocationType)
  type: LocationType;

  @IsOptional()
  companyId?: Types.ObjectId;

  @IsOptional()
  @IsObject()
  geometry?: GeometryDto;
}
