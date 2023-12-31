import { Images } from "src/api/images/images.entity";
import { Reviews } from "src/api/reviews/review.entity";
import { CommonEntity } from "src/common/common.entity";
import { Column, Entity, ManyToOne, OneToMany, OneToOne } from "typeorm";
import { HotelType } from "./hotel-type/hotel-type.entity";
import { PricingTable } from "./pricing-table/pricing-table.entity";

@Entity()
export class Hotels extends CommonEntity {
  @Column()
  isRu: boolean;

  @Column()
  isHy: boolean;

  @Column()
  name: string;

  @Column()
  name_ru: string;

  @Column()
  name_hy: string;

  @Column()
  thumbnail: string;

  @Column('text')
  maps: string;

  @Column()
  price: number;

  @Column()
  fromAirport: string;

  @Column()
  fromAirport_ru: string;

  @Column()
  fromAirport_hy: string;

  @Column()
  freeCancellation: string;

  @Column()
  freeCancellation_ru: string;

  @Column()
  freeCancellation_hy: string;

  @Column()
  score: number;

  @Column()
  country: string;

  @Column()
  country_ru: string;

  @Column()
  country_hy: string;

  @Column()
  city: string;

  @Column()
  city_ru: string;

  @Column()
  city_hy: string;

  @ManyToOne(() => HotelType, (hotelType) => hotelType.hotel)
  type: HotelType;

  @Column({ nullable: true })
  checkInTime: string;

  @Column({ nullable: true })
  checkOutTime: string;

  @Column('text')
  shortDescription: string;

  @Column('text')
  shortDescription_ru: string;

  @Column('text')
  shortDescription_hy: string;

  @Column('text')
  longDescription: string;

  @Column('text')
  longDescription_ru: string;

  @Column('text')
  longDescription_hy: string;

  @OneToMany(() => Reviews, (review) => review.hotel)
  reviews: Reviews[];

  // @OneToOne(()=> PricingTableHeader, (pricingTableHeader) => pricingTableHeader.hotel)
  // pricingTableHeader: PricingTableHeader;

  @Column('varchar',{default:"Jan-June"})
  pricingTableHeaderFirstPartName: string;

  @Column('varchar',{default:"July-December"})
  pricingTableHeaderLastPartName: string;


  @OneToMany(() => PricingTable, (pricingTable) => pricingTable.hotel)
  pricingTable: PricingTable[];

  @OneToMany(() => Images, (image) => image.hotel)
  images: Images[];
}
