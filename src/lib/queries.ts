import { gql } from 'graphql-request'

// Fragment for product fields
export const PRODUCT_FIELDS = gql`
  fragment ProductFields on Product {
    id
    name
    slug
    description
    price
    images {
      id
      url
    }
    categories {
      id
      name
      slug
    }
  }
`

// Get all products
export const GET_PRODUCTS = gql`
  ${PRODUCT_FIELDS}
  query GetProducts {
    products {
      ...ProductFields
    }
  }
`

// Get single product by slug
export const GET_PRODUCT_BY_SLUG = gql`
  ${PRODUCT_FIELDS}
  query GetProductBySlug($slug: String!) {
    product(where: { slug: $slug }) {
      ...ProductFields
    }
  }
`

// Get products by category slug
export const GET_PRODUCTS_BY_CATEGORY = gql`
  ${PRODUCT_FIELDS}
  query GetProductsByCategory($categorySlug: String!) {
    products(where: { categories_some: { slug: $categorySlug } }) {
      ...ProductFields
    }
  }
`

// Get all categories
export const GET_CATEGORIES = gql`
  query GetCategories {
    categories {
      id
      name
      slug
      description
    }
  }
`

// Get category by slug with products
export const GET_CATEGORY_WITH_PRODUCTS = gql`
  ${PRODUCT_FIELDS}
  query GetCategoryWithProducts($slug: String!) {
    category(where: { slug: $slug }) {
      id
      name
      slug
      description
      products {
        ...ProductFields
      }
    }
  }
`

// Get currencies
export const GET_CURRENCIES = gql`
  query GetCurrencies {
    currencies {
      code
      default
      rate
    }
  }
`
