// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const cryptoNewsHeaders = {
//     'X-BingApis-SDK': 'true',
//     'X-RapidAPI-Key': '5b3e461bcemshfce88ea69797bc1p1e79d2jsn6ab8af18ac67',
//     'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
// };

// const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

// const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

// export const cryptoNewsApi = createApi({
//     reducerPath: 'cryptoNewsApi',
//     baseQuery: fetchBaseQuery({ baseUrl }),
//     endpoints: (builder) => ({
//         getCryptoNews: builder.query({
//             query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
//         }),
//     }),
// });

// export const {
//     useGetCryptoNewsQuery,
// } = cryptoNewsApi;

// require('dotenv').config();
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const cryptoNewsHeaders = {
//     'X-Api-Key': process.env.REACT_APP_GNEWS_API_KEY,
// };

// const baseUrl = 'https://gnews.io/api/v4';

// const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

// export const cryptoNewsApi = createApi({
//     reducerPath: 'cryptoNewsApi',
//     baseQuery: fetchBaseQuery({ baseUrl }),
//     endpoints: (builder) => ({
//         getCryptoNews: builder.query({
//             query: ({ newsCategory, count }) => createRequest(`/search?q=${newsCategory}&max=${count}`),
//         }),
//     }),
// });

// export const {
//     useGetCryptoNewsQuery,
// } = cryptoNewsApi;


// const apiKey = '083fda934c744bc671cfafa7047d8602';
// const baseUrl = 'https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=083fda934c744bc671cfafa7047d8602';

// const cryptoNewsHeaders = {
//     'X-Api-Key': apiKey,
// };

// const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

// export const cryptoNewsApi = createApi({
//     reducerPath: 'cryptoNewsApi',
//     baseQuery: fetchBaseQuery({ baseUrl }),
//     endpoints: (builder) => ({
//         getCryptoNews: builder.query({
//             query: ({ newsCategory, count }) => createRequest(`/search?q=${newsCategory}&lang=en&country=us&max=${count}`),
//         }),
//     }),
// });

// export const {
//     useGetCryptoNewsQuery,
// } = cryptoNewsApi;

// const apiKey = '083fda934c744bc671cfafa7047d8602';
// // const baseUrl = 'https://cors-anywhere.herokuapp.com/https://gnews.io/api/v4';

// const cryptoNewsHeaders = {
//     'X-Api-Key': apiKey,
// };


// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const createRequest = (newsCategory, count) => ({
//     url: 'https://gnews.io/api/v4/search?q=example&apikey=083fda934c744bc671cfafa7047d8602',
//     // url: `${baseUrl}/search?q=${newsCategory}&lang=en&country=us&max=${count}&apikey=${apiKey}`,
//     // headers: cryptoNewsHeaders
// });

// export const cryptoNewsApi = createApi({
//     reducerPath: 'cryptoNewsApi',
//     baseQuery: fetchBaseQuery('https://gnews.io/api/v4/search?q=example&apikey=083fda934c744bc671cfafa7047d8602'),
//     endpoints: (builder) => ({
//         getCryptoNews: builder.query({
//             query: ({ newsCategory, count }) => createRequest(newsCategory, count),
//         }),
//     }),
// });

// export const {
//     useGetCryptoNewsQuery,
// } = cryptoNewsApi;

// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const apiKey = '083fda934c744bc671cfafa7047d8602';
// const baseUrl = 'https://gnews.io/api/v4';

// const createRequest = (news) => ({
//     url: `/search?q=${news}&lang=en&country=us&apikey=${apiKey}`,
// });

// export const cryptoNewsApi = createApi({
//     reducerPath: 'cryptoNewsApi',
//     baseQuery: fetchBaseQuery({ baseUrl }),
//     endpoints: (builder) => ({
//         getCryptoNews: builder.query({
//             query: ({ news}) => createRequest(news),
//         }),
//     }),
// });

// export const {
//     useGetCryptoNewsQuery,
// } = cryptoNewsApi;


import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiKey = '083fda934c744bc671cfafa7047d8602';
const baseUrl = 'https://gnews.io/api/v4';

const createRequest = (newsCategory, count = 10) => ({
    url: `/search?q=${newsCategory}&lang=en&country=us&max=${count}&apikey=${apiKey}`,
});

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({ newsCategory, count }) => createRequest(newsCategory, count),
        }),
    }),
});

export const {
    useGetCryptoNewsQuery,
} = cryptoNewsApi;