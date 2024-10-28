import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types';
import { AddToCartButton } from '@/components/cart/AddToCartButton';

interface ProductGridProps {
  products: Product[];
  isLoading: boolean;
  className?: string;
}

export function ProductGrid({ products, isLoading, className = '' }: ProductGridProps) {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={`grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 ${className}`}>
      {products.map((product) => (
        <div key={product.id} className="group relative">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200">
            <Image
              src={product.image || ''}
              alt={product.title}
              width={500}
              height={500}
              className="h-full w-full object-cover object-center group-hover:opacity-75"
            />
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-900">
                <Link href={`/products/${product.id}`}>
                  <span aria-hidden="true" className="absolute inset-0" />
                  {product.title}
                </Link>
              </h3>
              <p className="mt-1 text-sm text-gray-500">{product.category}</p>
            </div>
            <p className="text-sm font-medium text-gray-900">${product.price}</p>
          </div>
          <AddToCartButton product={product} className="mt-4" />
        </div>
      ))}
    </div>
  );
}