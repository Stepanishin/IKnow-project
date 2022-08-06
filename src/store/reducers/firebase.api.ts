import {createApi, fakeBaseQuery} from '@reduxjs/toolkit/query/react'
import { getDatabase, ref, get, child } from "firebase/database";
import { ICard } from '../../types/ICard';

export const firebaseApi = createApi({
  reducerPath: 'firebaseApi',
  baseQuery: fakeBaseQuery(),
  refetchOnFocus: true,
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
    }),
    getJudge: builder.query<ICard, any>({
      async queryFn(params) {
        const dbRef = ref(getDatabase());
        let arr :any 
        try {
          await get(child(dbRef, `/Judges/${params.name}`)).then((snapshot) => {
            if (snapshot.exists()) {
                arr = snapshot.val()
            }
          })
        } catch {
          console.log("No data available");
        }
        return {data: arr }
      }
    }),
    getUsers: builder.query({
      async queryFn() {
        const dbRef = ref(getDatabase());
        let arr :any 
        try {
          await get(child(dbRef, '/users')).then((snapshot) => {
            if (snapshot.exists()) {
                // arr = Object.entries(snapshot.val())
                arr = snapshot.val()
            }
          })
        } catch {
          console.log("No data available");
        }
        // return {data: Object.entries(Object.fromEntries(arr))}
        // return {data: Object.fromEntries(arr)}
        return {data: arr}
      }
    }),
  })
})


export const { useGetJudgesQuery, useGetJudgeQuery, useGetUsersQuery } = firebaseApi