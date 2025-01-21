import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class SignupDto {
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}

export class LoginDto {
  @IsNotEmpty()
  @IsEmail()
  email: string; 

  @IsNotEmpty()
  @IsString()
  password: string;
}
