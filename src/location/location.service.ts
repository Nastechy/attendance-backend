import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateLocationDto, UpdateLocationDto } from 'src/models/dto/location.dto';
import { Location, LocationDocument } from 'src/models/schema/location.schema';



@Injectable()
export class LocationService {
  constructor(
    @InjectModel(Location.name) private readonly locationModel: Model<LocationDocument>,
  ) {}

  async create(createLocationDto: CreateLocationDto): Promise<Location> {
    const location = new this.locationModel(createLocationDto);
    return location.save();
  }

  async findAll(): Promise<Location[]> {
    return this.locationModel.find().populate('companyId').exec();
  }

  async findOne(id: string): Promise<Location> {
    const location = await this.locationModel.findById(id).populate('companyId').exec();
    if (!location) {
      throw new NotFoundException(`Location with ID "${id}" not found`);
    }
    return location;
  }

  async update(id: string, updateLocationDto: UpdateLocationDto): Promise<Location> {
    const updatedLocation = await this.locationModel
      .findByIdAndUpdate(id, updateLocationDto, { new: true })
      .exec();
    if (!updatedLocation) {
      throw new NotFoundException(`Location with ID "${id}" not found`);
    }
    return updatedLocation;
  }

  async remove(id: string): Promise<void> {
    const result = await this.locationModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Location with ID "${id}" not found`);
    }
  }
}
