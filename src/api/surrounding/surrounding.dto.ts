import { IsArray, IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateSurroundingDto {
  @IsOptional()
  @IsBoolean()
  isRu: boolean;

  @IsOptional()
  @IsBoolean()
  isHy: boolean;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  name_ru: string;

  @IsOptional()
  @IsString()
  name_hy: string;

  @IsNotEmpty()
  @IsString()
  thumbnail: string;

  @IsNotEmpty()
  @IsString()
  maps: string;

  @IsNotEmpty()
  @IsString()
  shortDescription: string;

  @IsOptional()
  @IsString()
  shortDescription_ru: string;

  @IsOptional()
  @IsString()
  shortDescription_hy: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsOptional()
  @IsString()
  description_ru: string;

  @IsOptional()
  @IsString()
  description_hy: string;

  @IsNotEmpty()
  @IsString()
  type: string;

  @IsOptional()
  @IsString()
  type_ru: string;

  @IsOptional()
  @IsString()
  type_hy: string;

  @IsNotEmpty()
  @IsString()
  fromTbilisi: string;

  @IsOptional()
  @IsString()
  fromTbilisi_ru: string;

  @IsOptional()
  @IsString()
  fromTbilisi_hy: string;

  @IsString()
  @IsNotEmpty()
  date: string;

  @IsNotEmpty()
  @IsString()
  neatestSettlement: string;

  @IsOptional()
  @IsString()
  neatestSettlement_ru: string;

  @IsOptional()
  @IsString()
  neatestSettlement_hy: string;

  @IsNotEmpty()
  @IsString()
  available: string;

  @IsOptional()
  @IsString()
  available_ru: string;

  @IsOptional()
  @IsString()
  available_hy: string;

  @IsNotEmpty()
  @IsString()
  entrance: string;

  @IsOptional()
  @IsString()
  entrance_ru: string;

  @IsOptional()
  @IsString()
  entrance_hy: string;

  @IsArray()
  images: string[];
}

export class UpdateSurroundingDto {
  @IsOptional()
  @IsBoolean()
  isRu: boolean;

  @IsOptional()
  @IsBoolean()
  isHy: boolean;

  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  name_ru: string;

  @IsOptional()
  @IsString()
  name_hy: string;

  @IsOptional()
  @IsString()
  thumbnail: string;


  @IsOptional()
  @IsString()
  maps: string;

  @IsOptional()
  @IsString()
  shortDescription: string;

  @IsOptional()
  @IsString()
  shortDescription_ru: string;

  @IsOptional()
  @IsString()
  shortDescription_hy: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsOptional()
  @IsString()
  description_ru: string;

  @IsOptional()
  @IsString()
  description_hy: string;

  @IsOptional()
  @IsString()
  type: string;

  @IsOptional()
  @IsString()
  type_ru: string;

  @IsOptional()
  @IsString()
  type_hy: string;

  @IsOptional()
  @IsString()
  fromTbilisi: string;

  @IsOptional()
  @IsString()
  fromTbilisi_ru: string;

  @IsOptional()
  @IsString()
  fromTbilisi_hy: string;

  @IsOptional()
  @IsString()
  date: string;

  @IsOptional()
  @IsString()
  neatestSettlement: string;

  @IsOptional()
  @IsString()
  neatestSettlement_ru: string;

  @IsOptional()
  @IsString()
  neatestSettlement_hy: string;

  @IsOptional()
  @IsString()
  available: string;

  @IsOptional()
  @IsString()
  available_ru: string;

  @IsOptional()
  @IsString()
  available_hy: string;

  @IsOptional()
  @IsString()
  entrance: string;

  @IsOptional()
  @IsString()
  entrance_ru: string;

  @IsOptional()
  @IsString()
  entrance_hy: string;
}

export class CreateSurroundingImageDto {
  @IsString()
  @IsNotEmpty()
  url: string;

  @IsNumber()
  @IsNotEmpty()
  surroundingId: number;
}