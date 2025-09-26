// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4500/api/movies" }),
  endpoints: (builder) => ({
    addMovie: builder.mutation({
      query: ({ movie, user }) => {
        console.log(user);
        return {
          url: "/createMovie",
          method: "POST",
          headers: {
            authorization: `Bearer ${user.token}`,
          },
          body: movie,
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useAddMovieMutation } = moviesApi;
