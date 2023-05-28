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
