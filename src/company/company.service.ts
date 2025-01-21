import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCompanyDto, UpdateCompanyDto } from 'src/models/dto/company.dto';
import { Company, CompanyDocument } from 'src/models/schema/company.schema';


@Injectable()
export class CompanyService {
  constructor(
    @InjectModel(Company.name) private companyModel: Model<CompanyDocument>,
  ) {}

  async create(createCompanyDto: CreateCompanyDto): Promise<Company> {
    const company = new this.companyModel(createCompanyDto);
    return company.save();
  }

  async findAll(): Promise<Company[]> {
    return this.companyModel.find().populate('ownerId').exec();
  }

  async findOne(id: string): Promise<Company> {
    const company = await this.companyModel.findById(id).populate('ownerId').exec();
    if (!company) {
      throw new NotFoundException(`Company with ID "${id}" not found`);
    }
    return company;
  }

  async update(id: string, updateCompanyDto: UpdateCompanyDto): Promise<Company> {
    const updatedCompany = await this.companyModel
      .findByIdAndUpdate(id, updateCompanyDto, { new: true })
      .exec();
    if (!updatedCompany) {
      throw new NotFoundException(`Company with ID "${id}" not found`);
    }
    return updatedCompany;
  }

  async remove(id: string): Promise<void> {
    const result = await this.companyModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Company with ID "${id}" not found`);
    }
  }
}
