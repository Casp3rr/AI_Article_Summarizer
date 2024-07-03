import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const rapidApiKey = "070496c10dmshf78a9e2502bc1a3p1caf94jsn567271044ef6";


export const articleApi = createApi({
    reducerPath: 'articleApi',

    //API call
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', rapidApiKey);
            headers.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com');
            return headers;
        },
    }),

    endpoints: (builder) => ({
        getSummary: builder.query({
            query: (params) => `summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`,

        }),

    }),

})

export const { useLazyGetSummaryQuery } = articleApi;
