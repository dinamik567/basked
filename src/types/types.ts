export interface ProductCardI {
  Id: number;
  Name: string;
  Description: string;
  Quantity: number;
  Unit: string;
  Сurrency: string;
  Price: number;
  DiscountedPrice: number;
  Images: ImageOfProductCardI[];
}

export interface ImageOfProductCardI {
  FileName: string;
  FileExtension: string;
  Image: string;
}

export interface InfoProductCardI {
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
