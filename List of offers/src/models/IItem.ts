import { TMainImage } from "./TMainImage";

export interface IItem {
  url: string;
  MainImage: TMainImage;
  title: string;
  currency_code: string;
  price: string;
  quantity: number;
  listing_id: number;
  state: string;
}
