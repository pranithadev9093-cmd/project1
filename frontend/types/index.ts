export interface Customer {
    customer_id: string;
    name: string;
    age: number;
    gender: 'Male' | 'Female' | 'Other';
    city: string;
    country: string;
    created_at: string;
}

export interface Product {
    product_id: string;
    product_name: string;
    category_id: string;
    price: number;
}

export interface Sale {
    order_id: string;
    customer_id: string;
    product_id: string;
    quantity: number;
    price: number;
    order_date: string;
    store_id: string;
    city: string;
}

export interface DashboardSummary {
    revenue: number;
    orders: number;
    active_customers: number;
}
