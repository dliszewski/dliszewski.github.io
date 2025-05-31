import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';
import favIconSvg from '~/assets/favicons/favicon.svg';

export const headerData = {
  links: [
    {
      text: 'Strona główna',
      href: '/',
//       links: [
//         {
//           text: 'SaaS',
//           href: getPermalink('/homes/saas'),
//         },
//         {
//           text: 'Startup',
//           href: getPermalink('/homes/startup'),
//         },
//         {
//           text: 'Mobile App',
//           href: getPermalink('/homes/mobile-app'),
//         },
//         {
//           text: 'Personal',
//           href: getPermalink('/homes/personal'),
//         },
//       ],
    },
    {
      text: 'Pomoc',
      href: '/#help',
//       links: [
//         {
//           text: 'Features (Anchor Link)',
//           href: getPermalink('/#features'),
//         },
//         {
//           text: 'Services',
//           href: getPermalink('/services'),
//         },
//         {
//           text: 'Pricing',
//           href: getPermalink('/pricing'),
//         },
//         {
//           text: 'About us',
//           href: getPermalink('/about'),
//         },
//         {
//           text: 'Contact',
//           href: getPermalink('/contact'),
//         },
//         {
//           text: 'Terms',
//           href: getPermalink('/terms'),
//         },
//         {
//           text: 'Privacy policy',
//           href: getPermalink('/privacy'),
//         },
//       ],
    },
    {
      text: 'Czym jest CBT',
      href: '/#cbt'
//       links: [
//         {
//           text: 'Lead Generation',
//           href: getPermalink('/landing/lead-generation'),
//         },
//         {
//           text: 'Long-form Sales',
//           href: getPermalink('/landing/sales'),
//         },
//         {
//           text: 'Click-Through',
//           href: getPermalink('/landing/click-through'),
//         },
//         {
//           text: 'Product Details (or Services)',
//           href: getPermalink('/landing/product'),
//         },
//         {
//           text: 'Coming Soon or Pre-Launch',
//           href: getPermalink('/landing/pre-launch'),
//         },
//         {
//           text: 'Subscription',
//           href: getPermalink('/landing/subscription'),
//         },
//       ],
    },
    {
      text: 'O mnie',
      href: '/#about'
//       links: [
//         {
//           text: 'Blog List',
//           href: getBlogPermalink(),
//         },
//         {
//           text: 'Article',
//           href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
//         },
//         {
//           text: 'Article (with MDX)',
//           href: getPermalink('markdown-elements-demo-post', 'post'),
//         },
//         {
//           text: 'Category Page',
//           href: getPermalink('tutorials', 'category'),
//         },
//         {
//           text: 'Tag Page',
//           href: getPermalink('astro', 'tag'),
//         },
//       ],
    }
    // ,
    // {
    //     text: 'Opinie klientów',
    //     href: '/#testimonials'
    // }
  ],
  actions: [{ text: 'Kontakt', href: '/contact#hero' }],
};

export const footerData = {
  links: [
    {
//       title: 'Product',
//       links: [
//         { text: 'Features', href: '#' },
//         { text: 'Security', href: '#' },
//         { text: 'Team', href: '#' },
//         { text: 'Enterprise', href: '#' },
//         { text: 'Customer stories', href: '#' },
//         { text: 'Pricing', href: '#' },
//         { text: 'Resources', href: '#' },
//       ],
    },
    {
//       title: 'Platform',
//       links: [
//         { text: 'Developer API', href: '#' },
//         { text: 'Partners', href: '#' },
//         { text: 'Atom', href: '#' },
//         { text: 'Electron', href: '#' },
//         { text: 'AstroWind Desktop', href: '#' },
//       ],
    },
    {
//       title: 'Kontakt',
//       links: [
//         { text: 'Email: tbd@gmail.com'},
//       ],
    },
    {
      title: 'Kontakt',
      links: [
        { text: 'n.liszewska.psychoterapia@gmail.com', href:'mailto:n.liszewska.psychoteria@gmail.com'},
        { text: 'Polityka prywatności', href: '/privacy' },
      ],
    },
  ],
  secondaryLinks: [
//     { text: 'Terms', href: getPermalink('/terms') },
//     { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
//   socialLinks: [
//     { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
//     { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
//     { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
//     { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
//     { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
//   ],
  footNote: `
  <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="${favIconSvg.src}" alt="onWidget logo" loading="lazy"></img>
  Wszelkie prawa zastrzeżone. · All rights reserved.
  `
};
