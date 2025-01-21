import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common';
import { Permission } from 'src/models/schema/permission.schema';
import { PermissionService } from './permission.service';
import { CreatePermissionDto, UpdatePermissionDto } from 'src/models/dto/permission.dto';



@Controller('permissions')
export class PermissionController {
    constructor(private readonly permissionService: PermissionService) { }

    @Post()
    async create(@Body() createPermissionDto: CreatePermissionDto): Promise<Permission> {
        return this.permissionService.create(createPermissionDto);
    }

    @Get()
    async findAll(): Promise<Permission[]> {
        return this.permissionService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Permission> {
        return this.permissionService.findOne(id);
    }

    @Patch(':id')
    async update(
        @Param('id') id: string,
        @Body() updatePermissionDto: UpdatePermissionDto,
    ): Promise<Permission> {
        return this.permissionService.update(id, updatePermissionDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: string): Promise<void> {
        return this.permissionService.remove(id);
    }
}
