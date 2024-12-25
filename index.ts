export interface User {
    id: string;
    username: string;
    email: string;
    profileImage: string;
    description: string;
    rating: number;
    reviews: number;
    isSeller: boolean;
    languages: string[];
    skills: string[];
    completedOrders: number;
  }
  
  export interface Gig {
    id: string;
    sellerId: string;
    title: string;
    description: string;
    category: string;
    subCategory: string;
    price: number;
    deliveryTime: number;
    images: string[];
    features: string[];
    rating: number;
    reviews: number;
    orders: number;
  }
  
  export interface Order {
    id: string;
    gigId: string;
    buyerId: string;
    sellerId: string;
    status: 'pending' | 'in_progress' | 'completed' | 'cancelled';
    price: number;
    createdAt: Date;
    deliveryDate: Date;
  }
  
  export interface Review {
    id: string;
    gigId: string;
    userId: string;
    rating: number;
    comment: string;
    createdAt: Date;
  }