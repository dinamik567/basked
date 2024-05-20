// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CardProductI } from "@/types/types";
import { HeaderSideI, InfoCardProductI, BasketSummaryI } from "@/types/types";
import { BASE_URL_SHOPPING_CART } from "@/settings";

// Define a service using a base URL and expected endpoints
export const shippingProductApi = createApi({
  reducerPath: "shoppingCartApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL_SHOPPING_CART,
  }),
  endpoints: (builder) => ({
    getHeaderSite: builder.query<HeaderSideI, void>({
      query: () => "header",
    }),
    getShoppingCardProducts: builder.query<CardProductI[], void>({
      query: () => "products",
    }),
    getInfoShoppingBasked: builder.query<BasketSummaryI, void>({
      query: () => "products",
    }),
    clearShoppingBasket: builder.mutation<void, void>({
      query: () => ({
        url: "products",
        method: "DELETE",
      }),
    }),
    deleteShoppingCardProduct: builder.mutation<void, InfoCardProductI>({
      query: ({ ProductId, UserGuid }) => ({
        url: "product",
        method: "DELETE",
        body: { ProductId, UserGuid },
      }),
    }),
    increaseQuantityCardProduct: builder.mutation<void, InfoCardProductI>({
      query: ({ ProductId, UserGuid }) => ({
        url: "quantityinc",
        method: "POST",
        body: { ProductId, UserGuid },
      }),
    }),
    deacriseQuantityCardProduct: builder.mutation<void, InfoCardProductI>({
      query: ({ ProductId, UserGuid }) => ({
        url: "quantitydec",
        method: "POST",
        body: { ProductId, UserGuid },
      }),
    }),
    changeQuantityCardProduct: builder.mutation<void, InfoCardProductI>({
      query: ({ ProductId, UserGuid, Value }) => ({
        url: "changequantity",
        method: "POST",
        body: { ProductId, UserGuid, Value },
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetHeaderSiteQuery,
  useGetShoppingCardProductsQuery,
  useClearShoppingBasketMutation,
  useDeleteShoppingCardProductMutation,
  useIncreaseQuantityCardProductMutation,
  useDeacriseQuantityCardProductMutation,
  useChangeQuantityCardProductMutation,
} = shippingProductApi;
