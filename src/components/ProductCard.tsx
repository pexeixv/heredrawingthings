import { Link } from 'react-router-dom'
import type { Product } from '../types'
import { Button } from './ui/button'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const displayPrice = product.salePrice || product.price
  const hasDiscount = product.salePrice && product.salePrice < product.price

  return (
    <div className="group block">
      {/* <Link to={`/product/${product.slug}`} className="group block"> */}
      {/* Product Image */}
      <div className="aspect-square mb-3 overflow-hidden group-hover:scale-110 transition-transform">
        <img
          src={product.images[0]?.url}
          alt={product.name}
          className="w-full h-full object-contain group-hover:opacity-90 transition-opacity"
          width={500}
          height={500}
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
        <div>
          <Button
            size="sm"
            className="snipcart-add-item cursor-pointer mt-2 bg-transparent border border-black text-black rounded-none uppercase text-xs lg:opacity-0 group-hover:opacity-100 transition-opacity"
            variant="outline"
            data-item-id={product.id}
            data-item-name={product.name}
            data-item-price={product.salePrice || product.price}
            data-item-url="/"
            data-item-image={product.images[0]?.url}
            data-config-add-product-behavior="none"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  )
}
