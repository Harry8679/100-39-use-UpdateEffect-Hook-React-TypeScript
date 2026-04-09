// Types pour update effect - AUCUN ANY

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  inStock: boolean;
}

export interface Filter {
  category: string;
  minPrice: number;
  maxPrice: number;
  inStockOnly: boolean;
}

export interface ApiResponse {
  data: {
    value: number;
    timestamp: string;
  };
  status: string;
}