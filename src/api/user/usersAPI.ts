import {instance} from "../instance";

export type userPageApiType = {
   items: Array<userApiType>
   totalCount: number,
   error: null | string
}
export type userApiType = {
   name: string
   id: string
   photos: {
      "small": null | string
      "large": null | string
   }
   status: null | boolean
   followed: boolean
}

export const usersAPI = {
   getUsers: (currentPage: number, pageSize: number) => {
      return instance.get<userPageApiType>(`users?page=${currentPage}&count=${pageSize}`,).then(result => result.data)
   },

   postUser: (id: string) => {
      return instance.post<string>(`follow/${id}`,).then(() => id)
   },

   deleteUser: (id: string) => {
      return instance.delete<string>(`follow/${id}`,).then(() => id)
   }
}
