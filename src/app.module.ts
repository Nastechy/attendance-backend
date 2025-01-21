import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { UserService } from './user/user.service';
import { JwtStrategy } from './auth/jwt.strategy';
import { JwtService } from '@nestjs/jwt';
import { User, UserSchema } from './models/schema/user.schema';

dotenv.config();

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URI),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),


  ],
  controllers: [AppController, AuthController ],
  providers: [AppService, AuthService, UserService, JwtStrategy, JwtService],
})
export class AppModule { }



