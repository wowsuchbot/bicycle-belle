"use client";

interface ProductCardProps {
  name: string;
  price: number;
  description: string;
  shopName: string;
  distance?: string;
  image?: string;
}

export default function ProductCard({
  name,
  price,
  description,
  shopName,
  distance,
  image,
}: ProductCardProps) {
  return (
    <div className="product-card group">
      {/* Product Image */}
      <div className="h-64 bg-gray-50 overflow-hidden">
        {image ? (
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-300">
            <span className="text-6xl">🚲</span>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-6">
        {/* Product Name */}
        <h3 className="text-xl font-heading font-bold text-text-primary mb-2">
          {name}
        </h3>

        {/* Price */}
        <p className="text-2xl font-semibold mb-3" style={{ color: 'var(--brand-primary)' }}>
          ${price.toFixed(2)}
        </p>

        {/* Description */}
        <p className="text-text-secondary mb-4 line-clamp-2 leading-relaxed">
          {description}
        </p>

        {/* Shop Info */}
        <div className="flex justify-between items-center text-sm text-text-muted border-t border-border-light pt-3">
          <span className="font-medium font-body">{shopName}</span>
          {distance && <span className="text-xs">{distance}</span>}
        </div>
      </div>
    </div>
  );
}
