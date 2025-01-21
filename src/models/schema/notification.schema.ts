import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { NotificationType } from 'src/enums/notification.enum';

export type NotificationDocument = HydratedDocument<Notification>;

@Schema({ timestamps: true })
export class Notification {
    @Prop({
        type: String,
        enum: Object.values(NotificationType),
        required: true
    })
    type: NotificationType;

    @Prop({ type: [{ type: Types.ObjectId, ref: 'User' }], required: true })
    userIds: Types.ObjectId[];

    @Prop({ type: String, required: true })
    body: string;

    @Prop({ type: String, required: true })
    title: string;

    @Prop({ type: [{ type: Types.ObjectId, ref: 'User' }] })
    readUsers: Types.ObjectId[];
}

export const NotificationSchema = SchemaFactory.createForClass(Notification);
