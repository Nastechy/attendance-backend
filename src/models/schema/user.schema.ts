import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { UserRole, VerificationStatus } from 'src/enums/user.enum';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })

export class User {
  @Prop({ type: String, required: true, unique: true })
  staffId: string;

  @Prop({ type: Types.ObjectId, ref: 'Company', required: true })
  companyId: Types.ObjectId;

  @Prop({ type: String, required: true })
  firstName: string;

  @Prop({ type: String, required: true })
  lastName: string;

  @Prop({ type: String, required: true })
  phoneNumber: string;

  @Prop({ type: String, required: true })
  password: string;

  @Prop({ type: String, required: true, unique: true })
  email: string;

  @Prop({ type: String, required: true })
  address: string;

  @Prop({
    type: String,
    enum: Object.values(UserRole),
    required: true,
  })
  role: UserRole;

  @Prop({
    type: String,
    enum: Object.values(VerificationStatus),
    default: VerificationStatus.PENDING,
  })
  emailVerified: string;

  @Prop({
    type: String,
    enum: Object.values(VerificationStatus),
    default: VerificationStatus.PENDING,
  })
  kycVerified: VerificationStatus;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Permission' }] })
  permissionIds: Types.ObjectId[];
}

export const UserSchema = SchemaFactory.createForClass(User);
