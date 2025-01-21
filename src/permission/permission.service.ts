import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePermissionDto, UpdatePermissionDto } from 'src/models/dto/permission.dto';
import { Permission, PermissionDocument } from 'src/models/schema/permission.schema';



@Injectable()
export class PermissionService {
    constructor(
        @InjectModel(Permission.name)
        private readonly permissionModel: Model<PermissionDocument>,
    ) { }

    async create(createPermissionDto: CreatePermissionDto): Promise<Permission> {
        const permission = new this.permissionModel(createPermissionDto);
        return permission.save();
    }

    async findAll(): Promise<Permission[]> {
        return this.permissionModel.find().exec();
    }

    async findOne(id: string): Promise<Permission> {
        const permission = await this.permissionModel.findById(id).exec();
        if (!permission) {
            throw new NotFoundException(`Permission with ID "${id}" not found`);
        }
        return permission;
    }

    async update(id: string, updatePermissionDto: UpdatePermissionDto): Promise<Permission> {
        const updatedPermission = await this.permissionModel
            .findByIdAndUpdate(id, updatePermissionDto, { new: true })
            .exec();
        if (!updatedPermission) {
            throw new NotFoundException(`Permission with ID "${id}" not found`);
        }
        return updatedPermission;
    }

    async remove(id: string): Promise<void> {
        const result = await this.permissionModel.findByIdAndDelete(id).exec();
        if (!result) {
            throw new NotFoundException(`Permission with ID "${id}" not found`);
        }
    }
}
