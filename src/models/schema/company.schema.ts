import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type CompanyDocument = HydratedDocument<Company>;

@Schema({ timestamps: true })
export class Company {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  ownerId: Types.ObjectId;

  @Prop({ type: String, required: true })
  openingTime: string;

  @Prop({ type: String, required: true })
  closingTime: string;

  @Prop({ type: String, required: true })
  latenessTime: string;

  @Prop({ type: String, required: true })
  absentTime: string;

  @Prop({ type: String })
  logo?: string;
}

export const CompanySchema = SchemaFactory.createForClass(Company);


