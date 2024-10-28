'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { Product } from '@/types';

interface UseProductsOptions {
  category?: string | null;
  search?: string | null;
}

export function useProducts({ category, search }: UseProductsOptions = {}) {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const params = new URLSearchParams();
        if (category) params.append('category', category);
        if (search) params.append('search', search);

        const response = await axios.get(`/api/products?${params.toString()}`);
        setProducts(response.data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch products'));
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [category, search]);

  return { products, isLoading, error };
}