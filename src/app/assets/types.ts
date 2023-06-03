export interface HeaderOptionsInterface {
  name: string;
  linkTo: string;
}

export interface FooterLinksInterface{
  category: string;
  links: Array<{
    title: string;
    href: string;
  }>
}

export interface Product{
  _id: string,
  title: string,
  subTitle: string,
  price: string,
  quantity: number,
  size: string,
  images: [any],
}
export interface ProductInCart{
  productID: string,
  size: string,
  quantity: string,
  price: number,
}
