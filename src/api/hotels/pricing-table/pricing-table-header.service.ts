import { Injectable } from '@nestjs/common';
import {InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { PricingTableHeader } from './pricing-table-header.entity';
import { CreatePricingTableHeaderDto, UpdatePricingTableHeaderDto } from './pricing-table-header.dto';

@Injectable()
export class PricingTableHeaderService {
  constructor(
    @InjectRepository(PricingTableHeader)
    private readonly pricingTableHeaderRepository: Repository<PricingTableHeader>,
    @InjectDataSource() private readonly dataSource: DataSource
  ) { }

  async create(createPricingTableHeaderDto: CreatePricingTableHeaderDto) {
    const {...newData } = createPricingTableHeaderDto;
    const data = this.pricingTableHeaderRepository.create(newData);
    await this.pricingTableHeaderRepository.save(data);
    return {
      status: 201,
      message: 'Pricing table header created successfully',
      data: data
    }
  }


  async findAllHeaders() {
    const allHeaders = await this.pricingTableHeaderRepository.find();
    console.log('Bismillah')
    // const data = await this.dataSource.query("select * from PricingTableHeader")
    return {
      status: 200,
      message: 'Pricing table header list',
      data: allHeaders
    }
  }

  async findOne(id: number) {
    const header = await this.pricingTableHeaderRepository.findOne({ where: { id: id } });

    if (!header) {
      return {
        status: 404,
        message: 'Pricing table header not found',
        data: null
      }
    }

    return {
      status: 200,
      message: 'Pricing table header',
      data: header
    }
  }

  async update(id: number, updatePricingTableHeaderData: UpdatePricingTableHeaderDto) {
    const findPrice = await this.pricingTableHeaderRepository.findOne({ where: { id: id } });
    if (!findPrice) {
      return {
        status: 404,
        message: 'Pricing table header not found',
      }
    }
    const updatedPrice = await this.pricingTableHeaderRepository.save({
      ...findPrice,
      ...updatePricingTableHeaderData
    });

    return {
      status: 200,
      message: 'Pricing table header updated successfully',
      data: updatedPrice
    }
  }

  // async remove(id: number) {
  //   const findPrice = await this.pricingRepository.findOne({ where: { id: id } });
  //   if (!findPrice) {
  //     return {
  //       status: 404,
  //       message: 'Pricing table not found',
  //     }
  //   }
  //   const deletedPrice = await this.pricingRepository.delete(id);

  //   return {
  //     status: 200,
  //     message: 'Pricing table deleted successfully',
  //     data: deletedPrice
  //   }
  // }
}
