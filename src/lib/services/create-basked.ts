// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL_CREATE_BASKED } from "@/settings";

// Define a service using a base URL and expected endpoints
export const createBaskedApi = createApi({
  reducerPath: "shoppingCartApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL_CREATE_BASKED,
  }),
  endpoints: (builder) => ({
    createShoppingBasked: builder.mutation<void, number>({
      query: (quantity) => ({
        url: "create",
        method: "POST",
        body: { value: quantity },
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useCreateShoppingBaskedMutation } = createBaskedApi;
