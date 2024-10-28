'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { StarIcon } from '@heroicons/react/20/solid';

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Simulated featured products (replace with API call)
    setProducts([
      {
        id: '1',
        title: 'Fresh Organic Tomatoes',
        description: 'Locally grown organic tomatoes',
        price: 4.99,
        image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea',
        category: 'Vegetables'
      },
      {
        id: '2',
        title: 'Farm Fresh Eggs',
        description: 'Free-range organic eggs',
        price: 6.99,
        image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f',
        category: 'Dairy'
      },
      {
        id: '3',
        title: 'Organic Honey',
        description: 'Pure raw honey from local beekeepers',
        price: 12.99,
        image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38',
        category: 'Honey'
      }
    ]);
  }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={500}
                  height={500}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">{product.title}</h3>
                  <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}