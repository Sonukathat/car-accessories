
export interface Accessory {
  id: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  image: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  beforeImg: string;
  afterImg: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  image: string;
  category: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}
