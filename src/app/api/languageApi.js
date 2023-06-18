import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const languageApi = createApi({
  reducerPath: 'languageApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://portal.greenmilesoftware.com/' }),
  endpoints: (builder) => ({
    getResourcesSince: builder.query({
      query: () => `get_resources_since`,
    }),
  }),
})

export const { getResourcesSince } = languageApi