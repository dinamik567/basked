export interface CardProductI {
  Id: number;
  Name: string;
  Description: string;
  Quantity: number;
  Unit: string;
  Currency: string;
  Price: number;
  DiscountedPrice: number;
  Images: ImageOfCardProductI[];
}

export interface ImageOfCardProductI {
  FileName: string;
  FileExtension: string;
  Image: string;
}

export interface InfoCardProductI {
  ProductId: number;
  UserGuid: string;
  Value?: number;
}

export interface HeaderSideI {
  LogoImg: string;
  UserName: string;
  UserGuid: string;
}

export interface BasketSummaryI {
  TotalProducts: number;
  Discount: number;
  Total: number;
}
