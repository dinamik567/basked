// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ProductCardI } from "@/types/types";
import { HeaderSideI, InfoProductCardI, BasketSummaryI } from "@/types/types";
import { BASE_URL_SHOPPING_CART } from "@/settings";

// Define a service using a base URL and expected endpoints
export const shippingProductApi = createApi({
  reducerPath: "shoppingCartApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL_SHOPPING_CART,
  }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    getHeaderSite: builder.query<HeaderSideI, void>({
      query: () => "header",
    }),
    getShoppingCardProducts: builder.query<ProductCardI[], void>({
      query: () => "products",
      providesTags: ["Products"],
    }),
    getInfoShoppingBasked: builder.query<BasketSummaryI, void>({
      query: () => "products",
      providesTags: ["Products"],
    }),
    clearShoppingBasket: builder.mutation<void, void>({
      query: () => ({
        url: "products",
        method: "DELETE",
      }),
      invalidatesTags: ["Products"],
    }),
    deleteShoppingCardProduct: builder.mutation<void, InfoProductCardI>({
      query: ({ ProductId, UserGuid }) => ({
        url: "product",
        method: "DELETE",
        body: { ProductId, UserGuid },
      }),
      invalidatesTags: ["Products"],
    }),
    increaseQuantityCardProduct: builder.mutation<void, InfoProductCardI>({
      query: ({ ProductId, UserGuid }) => ({
        url: "quantityinc",
        method: "POST",
        body: { ProductId, UserGuid },
      }),
      invalidatesTags: ["Products"],
    }),
    deacriseQuantityCardProduct: builder.mutation<void, InfoProductCardI>({
      query: ({ ProductId, UserGuid }) => ({
        url: "quantitydec",
        method: "POST",
        body: { ProductId, UserGuid },
      }),
      invalidatesTags: ["Products"],
    }),

    changeQuantityCardProduct: builder.mutation<void, InfoProductCardI>({
      query: ({ ProductId, UserGuid, Value }) => ({
        url: "changequantity",
        method: "POST",
        body: { ProductId, UserGuid, Value },
      }),
      invalidatesTags: ["Products"],
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
