import {FooterLinksInterface, HeaderOptionsInterface} from "@/app/assets/types";

export const headerOptions: Array<HeaderOptionsInterface> = [
  {
    name: 'Female',
    linkTo: '/pages/female'
  }, {
    name: 'Male',
    linkTo: '/pages/male'
  }, {
    name: 'Kids',
    linkTo: '/pages/kids'
  }, {
    name: 'All Products',
    linkTo: '/pages/allProducts'
  }
]

export const FooterLinks: FooterLinksInterface[] = [
  {
    category: 'Company',
    links: [
      {
        title: 'About',
        href: '#'
      },
      {
        title: 'Terms of Use',
        href: '#'
      },
      {
        title: 'Privacy Policy',
        href: '#'
      },
      {
        title: 'How it Works',
        href: '#'
      },
      {
        title: 'Contact Us',
        href: '#'
      },
    ]
  },
  {
    category: 'Support',
    links: [
      {
        title: 'Support Center',
        href: '#'
      },
      {
        title: '24h Service',
        href: '#'
      },
      {
        title: 'Quick Chat',
        href: '#'
      }
    ]
  },
  {
    category: 'Contact',
    links: [
      {
        title: 'WhatsApp',
        href: '#'
      },
      {
        title: 'Support 24h',
        href: '#'
      }
    ]
  }
]
