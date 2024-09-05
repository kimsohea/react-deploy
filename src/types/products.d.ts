interface Product {
  productNo: string;
  name: string;
  description: string;
  imageName: string;
  imageUrl?: string;
}

interface CommonProductList {
  title: string;
  type: string;
  children: Product[];
}

export type ProductType = Product;

export type CommonProdListType = CommonProductList[];

interface BtnProducts {
  button: string;
  children: Product[];
}

interface BtnProductList {
  title: string;
  children: BtnProducts[];
}

export type BtnListType = BtnProductList[];
