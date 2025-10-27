export interface Product {
  id: string
  name: string
  slug: string
  price: number
  salePrice?: number
  description?: string
  images: ProductImage[]
  categories: Category[]
  soldOut?: boolean
}

export interface ProductImage {
  id: string
  url: string
  alt?: string
}

export interface Category {
  id: string
  name: string
  slug: string
  description?: string
}

export interface Currency {
  code: string
  default: boolean
  rate: number
}
