import { Link } from 'react-router-dom'
import type { Product } from '../types'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const displayPrice = product.salePrice || product.price
  const hasDiscount = product.salePrice && product.salePrice < product.price

  return (
    <Link to={`/product/${product.slug}`} className="group block">
      {/* Product Image */}
      <div className="aspect-square mb-3 overflow-hidden group-hover:scale-110 transition-transform">
        <img
          src={product.images[0]?.url}
          alt={product.name}
          className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
        />
      </div>

      {/* Product Info */}
      <div className="text-center">
        <h3 className="text-xs font-medium tracking-wider mb-1 group-hover:text-black text-black/40 transition-colors">
          {product.name}
        </h3>

        <div className="text-xs">
          {product.soldOut ? (
            <span className="text-red-600">SOLD OUT</span>
          ) : (
            <>
              {hasDiscount ? (
                <div className="space-x-2">
                  <span className="line-through text-gray-400">${product.price.toFixed(2)}</span>
                  <span className="text-red-600">${displayPrice.toFixed(2)}</span>
                </div>
              ) : (
                <span className="group-hover:text-black text-black/40 transition-colors">
                  ${displayPrice.toFixed(2)}
                </span>
              )}
            </>
          )}
        </div>
      </div>
    </Link>
  )
}
