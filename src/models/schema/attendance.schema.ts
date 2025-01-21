import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { PunctualityType } from 'src/enums/attendance.enum';

export type AttendanceDocument = HydratedDocument<Attendance>;

@Schema({ timestamps: true })
export class Geometry {
  @Prop({ type: String, required: true })
  address: string;

  @Prop({ type: String, required: true })
  lat: string;

  @Prop({ type: String, required: true })
  long: string;

  @Prop({ type: String })
  state?: string;
}

@Schema({ timestamps: true })
export class Attendance {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  userId: Types.ObjectId;

  @Prop({ type: Geometry, required: true })
  geometry: Geometry;

  @Prop({ type: String, required: true })
  time: string;

  @Prop({
    type: String,
    enum: Object.values(PunctualityType),
    required: true,
  })
  punctuality: PunctualityType;

  @Prop({ type: Types.ObjectId, ref: 'Location', required: true })
  locationId: Types.ObjectId;
}

export const AttendanceSchema = SchemaFactory.createForClass(Attendance);
