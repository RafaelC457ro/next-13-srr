export interface Item {
  id: number;
  quantity: number;
  name: string;
  price: number;
  description: string;
  image_url: string;
  total: number;
}

export interface Checkout {
  items: Item[];
  subtotal: number;
  total: number;
}
