import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';



const cryptoExchangesHeaders = {
    'X-RapidAPI-Key': 'e68d4f6705mshdeae007a4e81df9p1cd6fdjsn5792d504a301',
    'X-RapidAPI-Host': 'qvantana.p.rapidapi.com'
  }
   const baseUrl = 'https://qvantana.p.rapidapi.com';

   const createRequest = (url) => ({
    url, headers: cryptoExchangesHeaders
}); 
 export const cryptoExchangesApi = createApi({
   reducerPath: 'cryptoExchengesApi',
   baseQuery: fetchBaseQuery({baseUrl}),
   endpoints: (builder) => ({
       getCryptoExchanges: builder.query({
           query: () => createRequest(`/exchenges`)
       })
   })
});
export const {
   useGetCryptoExchangesQuery, 
} = cryptoExchangesApi;