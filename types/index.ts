export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  image?: string;
  category: string;
  sellerId: string;
}

export interface User {
  id: string;
  name?: string;
  email: string;
  role: 'ADMIN' | 'FARMER' | 'BUYER';
}

export interface Order {
  id: string;
  buyerId: string;
  status: 'PENDING' | 'PAID' | 'SHIPPED' | 'DELIVERED' | 'CANCELLED';
  total: number;
  items: OrderItem[];
  createdAt: Date;
  updatedAt: Date;
}

export interface OrderItem {
  id: string;
  orderId: string;
  productId: string;
  quantity: number;
  price: number;
  product: Product;
}