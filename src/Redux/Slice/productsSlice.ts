import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Item } from '../types';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),
  endpoints: (builder) => ({
    getProducts: builder.query<Item[], { category: string; sort: string }>({
      query: (params) => ({
        url: `products/${params.category}`,
        params: {
          sort: params.sort,
        },
      }),
    }),
    getCategories: builder.mu<string[], string>({
      query: () => ({
        url: 'products/categories',
      }),
    }),
  }),
});

export const { useGetProductsQuery, useGetCategoriesQuery } = productsApi;
