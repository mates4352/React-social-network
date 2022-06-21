import {userPageType} from "../../bll/redux/reducer/usersPageReducer/usersPageReducer";
import {instance} from "../instance";

export const usersAPI = {
   getUsers: (currentPage: number, pageSize: number) => {
      return instance.get<userPageType>(`users?page=${currentPage}&count=${pageSize}`,).then(result => result.data)
   },

   postUser: (id: string) => {
      return instance.post<string>(`follow/${id}`,).then(() => id)
   }
}
