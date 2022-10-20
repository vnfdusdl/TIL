type PageInfo = {
  title: string;
};

type Page = 'Home' | 'About' | 'Contact';

const nav: Record<Page, PageInfo> = {
  Home: {
    title: 'Home',
  },
  About: {
    title: 'About',
  },
  Contact: {
    title: 'Contact',
  },
};
