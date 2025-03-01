import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
  } from '@nestjs/common';
  import { CompanyService } from './company.service';
import { CreateCompanyDto, UpdateCompanyDto } from 'src/models/dto/company.dto';

  
  @Controller('companies')
  export class CompanyController {
    constructor(private readonly companyService: CompanyService) {}
  
    @Post()
    create(@Body() createCompanyDto: CreateCompanyDto) {
      return this.companyService.create(createCompanyDto);
    }
  
    @Get()
    findAll() {
      return this.companyService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.companyService.findOne(id);
    }
  
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCompanyDto: UpdateCompanyDto) {
      return this.companyService.update(id, updateCompanyDto);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.companyService.remove(id);
    }
  }
  