export interface ProductType {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string
}

export interface NewProductType {
    title: string;
    description: string;
    price: number;
    category: string;
    image: string;
}