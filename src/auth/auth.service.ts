import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserRole } from 'src/enums/user.enum';
import { LoginDto, SignupDto } from 'src/models/dto/auth.dto';
import { CreateUserDto } from 'src/models/dto/user.dto';
import { UserService } from 'src/user/user.service';



@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async signup(signupDto: SignupDto): Promise<any> {
    const hashedPassword = await bcrypt.hash(signupDto.password, 10);

   const createUserDto: CreateUserDto = {
    ...signupDto,
    password: hashedPassword,
    staffId: 'default-staff-id',
    companyId: 'default-company-id',
    phoneNumber: 'default-phone-number',
    address: 'default-address',
    role: UserRole.STAFF,
  };

  const newUser = await this.userService.createUser(createUserDto);
  return this.generateToken(newUser);
  }

  async login(loginDto: LoginDto): Promise<any> {
    const user = await this.userService.findByEmail(loginDto.email);
    if (!user || !(await bcrypt.compare(loginDto.password, user.password))) {
      throw new UnauthorizedException('Invalid email or password');
    }
    return this.generateToken(user);
  }

  private generateToken(user: any): { accessToken: string } {
    const payload = { sub: user._id, email: user.email };
    const accessToken = this.jwtService.sign(payload);
    return { accessToken };
  }
}
