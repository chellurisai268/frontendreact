// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const uploadApi = createApi({
  reducerPath: 'uploadApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3300/' }),
  endpoints: (builder) => ({
      signup: builder.mutation({
      query: (user) =>({
        url: "/signup",
      method: 'POST',
      body: user,
    }),
      }), 
      login: builder.mutation({
        query: (user) =>({
          url: "/login",
        method: 'POST',
        body: user,
      }),
        })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useSignupMutation,useLoginMutation } = uploadApi

