'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { ProductGrid } from '@/components/products/ProductGrid';
import { ProductFilters } from '@/components/products/ProductFilters';
import { SearchBar } from '@/components/products/SearchBar';
import { useProducts } from '@/hooks/useProducts';

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const category = searchParams.get('category');
  const search = searchParams.get('search');
  const { products, isLoading } = useProducts({ category, search });

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col gap-8">
          <SearchBar />
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-8">
            <ProductFilters className="hidden lg:block lg:col-span-3" />
            <ProductGrid products={products} isLoading={isLoading} className="lg:col-span-9" />
          </div>
        </div>
      </div>
    </div>
  );
}