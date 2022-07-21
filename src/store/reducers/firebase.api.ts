import {createApi, fakeBaseQuery} from '@reduxjs/toolkit/query/react'
import { getDatabase, ref, get, child } from "firebase/database";

export const firebaseApi = createApi({
  reducerPath: 'firebaseApi',
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getJudges: builder.query({
      async queryFn() {
        const dbRef = ref(getDatabase());
        let arr :any 
        try {
          await get(child(dbRef, '/Judges')).then((snapshot) => {
            if (snapshot.exists()) {
                arr = Object.entries(snapshot.val())
            }
          })
        } catch {
          console.log("No data available");
        }
        return {data: Object.entries(Object.fromEntries(arr))}
      }
    })
  })
})


// export const firebaseApi = createApi({
//   reducerPath: 'firebaseApi',
//   baseQuery: fakeBaseQuery(),
  // baseQuery: fakeBaseQuery({
  //   baseUrl: 'https://rectville-default-rtdb.europe-west1.firebasedatabase.app/'
  // }),
  // refetchOnFocus: true,
  // endpoints: build => ({
  //   getJudges: build.query<any, string>({
  //     query: () => ({
  //       url: `/Judges`
  //     }),
  //   }),
    // getUserRepos: build.query<any, any>({
    //   query: (username: string) => ({
    //     url: `users/${username}/repos`
    //   })
    // }),
    // createUser: build.mutation<any, void>({
    //   query: () => ``
    // })
  // })
// })

export const { useGetJudgesQuery } = firebaseApi