import { Schema } from 'mongoose';

export const UserSchema = new Schema({
    staffId: { type: String, required: true, unique: true },
    companyId: { type: Schema.Types.ObjectId, ref: 'Company', required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    role: {
        type: String,
        enum: ['staff', 'admin', 'super admin'],
        required: true
    },
    emailVerified: {
        type: String,
        enum: ['verified', 'pending'],
        default: 'pending',
    },
    kycVerified: {
        type: String,
        enum: ['verified', 'pending'],
        default: 'pending',
    },
    permissionIds: [{ type: Schema.Types.ObjectId, ref: 'Permission' }],
}, 
{ timestamps: true });
