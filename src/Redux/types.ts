export interface Item {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  category: string;
  rating: { rate: number; count: number };
}

export interface Sort {
  category: string;
  sort: string;
  search: string;
}
