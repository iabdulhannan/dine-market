export interface HeaderOptionsInterface {
  name: string;
  linkTo: string;
}

export interface FooterLinks{
  category: string;
  links: Array<{
    title: string;
    href: string;
  }>
}
