export enum OrderStatus {
  PENDING = 'PENDING',
  ACCEPTED = 'ACCEPTED',
  IN_PROGRESS = 'IN_PROGRESS',
  READY_FOR_DELIVERY = 'READY_FOR_DELIVERY',
  OUT_FOR_DELIVERY = 'OUT_FOR_DELIVERY',
  DELIVERED = 'DELIVERED',
  CANCELLED = 'CANCELLED'
}

export interface User {
  id: string;
  name: string;
  phone: string;
  role: 'CUSTOMER' | 'OUTLET_STAFF' | 'ADMIN';
}

export interface Order {
  id: string;
  customerId: string;
  outletId: string;
  status: OrderStatus;
  totalAmount: number;
  items: OrderItem[];
  createdAt: Date;
  updatedAt: Date;
}

export interface OrderItem {
  id: string;
  orderId: string;
  serviceId: string;
  quantity: number;
  price: number;
}
