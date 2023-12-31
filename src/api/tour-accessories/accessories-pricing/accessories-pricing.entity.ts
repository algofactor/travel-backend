import { CommonEntity } from "src/common/common.entity";
import { Column, Entity, ManyToOne } from "typeorm";
import { TourAccessory } from "../tour-accessory.entity";

@Entity()
export class AccessoriesPricing extends CommonEntity {
  @Column()
  duration: string;

  @Column()
  duration_ru: string;

  @Column()
  duration_hy: string;

  @Column()
  price: number;

  @ManyToOne(() => TourAccessory, (accessory) => accessory.pricing)
  accessory: TourAccessory;
}
