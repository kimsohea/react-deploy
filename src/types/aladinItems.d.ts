interface seriesType {
  seriesId: number;
  seriesLink: string;
  seriesName: string;
}

interface reviewType {
  reviewRank: number;
  title: string;
  writer: string;
  link: string;
}

interface subInfoType {
  subTitle: string;
  originalTitle: string;
  itemPage: number;
}

interface itemType {
  title: string;
  link: string;
  author: string;
  pubDate: string;
  description: string;
  isbn: string;
  isbn13: string;
  itemId: number;
  priceSales: number;
  priceStandard: number;
  mallType: string;
  stockStatus: string;
  mileage: number;
  cover: string;
  categoryId: number;
  categoryName: string;
  publisher: string;
  salesPoint: number;
  adult: boolean;
  fixedPrice: boolean;
  customerReviewRank: number;
  bestRank?: number;
  seriesInfo?: seriesType;
  subInfo: subInfoType;
  reviewList?: reviewType;
}

interface listType {
  version: string;
  logo: string;
  title: string;
  link: string;
  pubDate: string;
  totalResults: number;
  startIndex: number;
  itemsPerPage: number;
  query: string;
  searchCategoryId: number;
  searchCategoryName: string;
  item: itemType[];
}

export type alainListType = listType;

export type aladinItemType = itemType[];
