export interface iProduct{
    id:string,
    name: string,
    image: string,
    category: string,
    price: number,
    currency: string,
    details: string,
    dateCreated: string,
    categoryName?: string,
    categoryId?:string
    reviews?: iReview[]
}

export interface iCategory{
    id:string,
    createdAt: string,
    name: string,
    products: iProduct[]
}

export interface iReview{
    rating: number,
    likes: number,
    title: string,
    content:string,
    name: string
    email:string
    
}


