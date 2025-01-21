// user.dto.ts

import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsArray,
} from 'class-validator';
import { UserRole, VerificationStatus } from 'src/enums/user.enum';



export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  staffId: string;

  @IsNotEmpty()
  @IsString()
  companyId: string;

  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @IsString()
  phoneNumber: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsEnum(UserRole)
  role: UserRole; 

  @IsOptional()
  @IsEnum(VerificationStatus)
  emailVerified?: VerificationStatus; 

  @IsOptional()
  @IsEnum(VerificationStatus)
  kycVerified?: VerificationStatus; 

  @IsOptional()
  @IsArray()
  @IsString({ each: true }) 
  permissionIds?: string[];
}

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  staffId?: string;

  @IsOptional()
  @IsString()
  companyId?: string;

  @IsOptional()
  @IsString()
  firstName?: string;

  @IsOptional()
  @IsString()
  lastName?: string;

  @IsOptional()
  @IsString()
  phoneNumber?: string;

  @IsOptional()
  @IsString()
  password?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsEnum(UserRole)
  role?: UserRole;

  @IsOptional()
  @IsEnum(VerificationStatus)
  emailVerified?: VerificationStatus; 

  @IsOptional()
  @IsEnum(VerificationStatus)
  kycVerified?: VerificationStatus; 

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  permissionIds?: string[];
}
