import { Document } from 'mongoose';

export interface User extends Document {
    staffId: string;
    companyId: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    password: string;
    email: string;
    address: string;
    role: 'staff' | 'admin' | 'super admin';
    emailVerified: 'verified' | 'pending';
    kycVerified: 'verified' | 'pending';
    permissionIds: string[];
}
