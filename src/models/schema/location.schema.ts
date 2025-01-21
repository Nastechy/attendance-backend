import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { LocationType } from 'src/enums/location.enum';

export type LocationDocument = HydratedDocument<Location>;

@Schema()
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
export class Location {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({
    type: String,
    enum: Object.values(LocationType),
    required: true
  })
  type: LocationType;

  @Prop({ type: Types.ObjectId, ref: 'Company', required: true })
  companyId: Types.ObjectId;

  @Prop({ type: Geometry, required: true })
  geometry: Geometry;
}

export const LocationSchema = SchemaFactory.createForClass(Location);
