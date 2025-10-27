import { useEffect, useState } from 'react'
import { Header } from '../components/Header'
import { ProductGrid } from '../components/ProductGrid'
import type { Product } from '../types'

// Mock data - replace with Hygraph API calls
const mockProducts: Product[] = [
  {
    id: '1',
    name: 'FLORAL ILLUSTRATION PRINT',
    slug: 'floral-illustration-print',
    price: 45.0,
    images: [
      {
        id: '1',
        url: 'https://i.ibb.co/LXCPjBrm/dj-old-english.png',
      },
    ],
    categories: [{ id: '1', name: 'Prints', slug: 'prints' }],
    soldOut: false,
  },
  {
    id: '2',
    name: 'BOTANICAL SKETCH SET',
    slug: 'botanical-sketch-set',
    price: 65.0,
    salePrice: 52.0,
    images: [
      {
        id: '2',
        url: 'https://i.ibb.co/LXCPjBrm/dj-old-english.png',
      },
    ],
    categories: [
      { id: '1', name: 'Prints', slug: 'prints' },
      { id: '2', name: 'Sale', slug: 'sale' },
    ],
    soldOut: false,
  },
  {
    id: '3',
    name: 'ABSTRACT WATERCOLOR',
    slug: 'abstract-watercolor',
    price: 38.0,
    images: [
      {
        id: '3',
        url: 'https://i.ibb.co/LXCPjBrm/dj-old-english.png',
      },
    ],
    categories: [{ id: '3', name: 'Originals', slug: 'originals' }],
    soldOut: true,
  },
  {
    id: '4',
    name: 'PORTRAIT STUDY',
    slug: 'portrait-study',
    price: 55.0,
    images: [
      {
        id: '4',
        url: 'https://i.ibb.co/LXCPjBrm/dj-old-english.png',
      },
    ],
    categories: [{ id: '3', name: 'Originals', slug: 'originals' }],
    soldOut: false,
  },
  {
    id: '5',
    name: 'LANDSCAPE SERIES NO. 3',
    slug: 'landscape-series-3',
    price: 48.0,
    images: [
      {
        id: '5',
        url: 'https://i.ibb.co/LXCPjBrm/dj-old-english.png',
      },
    ],
    categories: [{ id: '1', name: 'Prints', slug: 'prints' }],
    soldOut: false,
  },
  {
    id: '6',
    name: 'MINIMALIST LINE WORK',
    slug: 'minimalist-line-work',
    price: 42.0,
    images: [
      {
        id: '6',
        url: 'https://i.ibb.co/LXCPjBrm/dj-old-english.png',
      },
    ],
    categories: [{ id: '1', name: 'Prints', slug: 'prints' }],
    soldOut: false,
  },
]

function Home() {
  const [products, setProducts] = useState<Product[]>(mockProducts)

  useEffect(() => {
    // TODO: Fetch products from Hygraph
    // fetchProducts();
  }, [])

  return <ProductGrid products={products} />
}

export default Home
