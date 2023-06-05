import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTourDto, UpdateTourDto } from './tour.dto';
import { Tours } from './tour.entity';

@Injectable()
export class ToursService {
  constructor(
    @InjectRepository(Tours)
    private readonly toursRepository: Repository<Tours>,
  ) { }


  async create(createTourDto: CreateTourDto) {
    const newTour = await this.toursRepository.create(createTourDto);

    const tour = await this.toursRepository.save(newTour);

    if (tour) {
      return {
        statusCode: 201,
        message: 'Tour created successfully',
        data: tour,
      }
    }

    return {
      statusCode: 500,
      message: 'Something went wrong',
    }
  }

  async findAll() {
    const tours = await this.toursRepository.find();
    return {
      statusCode: 200,
      data: tours
    };
  }

  async findOne(id: number) {
    const tour = await this.toursRepository.findOneById(id);

    if (tour) {
      return {
        statusCode: 200,
        data: tour
      }
    }
    return {
      statusCode: 404,
      message: 'Tour not found'
    }
  }

  update(id: number, updateTourDto: UpdateTourDto) {
    return `This action updates a #${id} tour`;
  }

  async remove(id: number) {
    const tour = await this.toursRepository.findOneById(id);

    if (tour) {
      await this.toursRepository.remove(tour);
      return {
        statusCode: 200,
        message: 'Tour deleted successfully'
      }
    }

    return {
      statusCode: 404,
      message: 'Tour not found'
    }
  }
}
