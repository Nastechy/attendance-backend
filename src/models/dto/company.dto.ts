import { IsNotEmpty, IsString, IsOptional } from 'class-validator';
import { Types } from 'mongoose';

export class CreateCompanyDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  ownerId: Types.ObjectId;

  @IsNotEmpty()
  @IsString()
  openingTime: string;

  @IsNotEmpty()
  @IsString()
  closingTime: string;

  @IsNotEmpty()
  @IsString()
  latenessTime: string;

  @IsNotEmpty()
  @IsString()
  absentTime: string;

  @IsOptional()
  @IsString()
  logo?: string;
}

export class UpdateCompanyDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  ownerId?: Types.ObjectId;

  @IsOptional()
  @IsString()
  openingTime?: string;

  @IsOptional()
  @IsString()
  closingTime?: string;

  @IsOptional()
  @IsString()
  latenessTime?: string;

  @IsOptional()
  @IsString()
  absentTime?: string;

  @IsOptional()
  @IsString()
  logo?: string;
}
