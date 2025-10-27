import { hygraphClient } from './hygraph'
import {
  GET_PRODUCTS,
  GET_PRODUCT_BY_SLUG,
  GET_PRODUCTS_BY_CATEGORY,
  GET_CATEGORIES,
  GET_CATEGORY_WITH_PRODUCTS,
  GET_CURRENCIES,
} from './queries'
import type { Product, Category, Currency } from '../types'

// Fetch all products
export async function fetchProducts(): Promise<Product[]> {
  try {
    const data = await hygraphClient.request<{ products: Product[] }>(GET_PRODUCTS)
    return data.products
  } catch (error) {
    console.error('Error fetching products:', error)
    throw error
  }
}

// Fetch single product by slug
export async function fetchProductBySlug(slug: string): Promise<Product | null> {
  try {
    const data = await hygraphClient.request<{ product: Product }>(GET_PRODUCT_BY_SLUG, { slug })
    return data.product
  } catch (error) {
    console.error('Error fetching product:', error)
    throw error
  }
}

// Fetch products by category
export async function fetchProductsByCategory(categorySlug: string): Promise<Product[]> {
  try {
    const data = await hygraphClient.request<{ products: Product[] }>(GET_PRODUCTS_BY_CATEGORY, {
      categorySlug,
    })
    return data.products
  } catch (error) {
    console.error('Error fetching products by category:', error)
    throw error
  }
}

// Fetch all categories
export async function fetchCategories(): Promise<Category[]> {
  try {
    const data = await hygraphClient.request<{ categories: Category[] }>(GET_CATEGORIES)
    return data.categories
  } catch (error) {
    console.error('Error fetching categories:', error)
    throw error
  }
}

// Fetch category with products
export async function fetchCategoryWithProducts(slug: string): Promise<Category | null> {
  try {
    const data = await hygraphClient.request<{ category: Category }>(GET_CATEGORY_WITH_PRODUCTS, {
      slug,
    })
    return data.category
  } catch (error) {
    console.error('Error fetching category with products:', error)
    throw error
  }
}

// Fetch currencies
export async function fetchCurrencies(): Promise<Currency[]> {
  try {
    const data = await hygraphClient.request<{ currencies: Currency[] }>(GET_CURRENCIES)
    return data.currencies
  } catch (error) {
    console.error('Error fetching currencies:', error)
    throw error
  }
}
