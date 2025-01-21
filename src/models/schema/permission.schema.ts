import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PermissionDocument = HydratedDocument<Permission>;

@Schema({ timestamps: true })
export class Permission {
  @Prop({ type: String, required: true, unique: true })
  name: string;

  @Prop({ type: String })
  description: string;
}

export const PermissionSchema = SchemaFactory.createForClass(Permission);
