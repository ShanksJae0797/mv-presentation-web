export interface NavigationMenuInterface {
  id: number;
  title: string;
  href: string;
  dropdown?: NavigationMenuInterface[];
}

export interface CarouselInterface {
  id: number;
  title: string;
  description: string;
  image: string;
  href: string;
}

export interface HomePageBlogsInterface {
  _id: string;
  Category: string;
  Created_date: string;
  Created_by: string;
  blog: string;
  isActive: boolean;
  isPublished: boolean;
  blog_header_img: string;
  blog_title: string;
  search_key: number;
  metaDescription: string;
  metaTitle: string;
}
