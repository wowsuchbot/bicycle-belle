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
    <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-white">
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover" />
        ) : (
          <span className="text-gray-400 text-4xl">🚲</span>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-2xl text-green-600 font-semibold mb-2">${price.toFixed(2)}</p>
        <p className="text-gray-600 mb-3 line-clamp-2">{description}</p>
        <div className="flex justify-between items-center text-sm text-gray-500">
          <span className="font-medium">{shopName}</span>
          {distance && <span>{distance}</span>}
        </div>
      </div>
    </div>
  );
}
