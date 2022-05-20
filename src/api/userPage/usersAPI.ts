import {AxiosResponse} from "axios";
import {userPageType} from "../../bll/redux/reducer/usersPageReducer/usersPageReducer";
import {instance} from "../instance";

export const usersAPI = {
   getUsers: (currentPage: number, pageSize: number) => {
      return instance.get(`users?page=${currentPage}&count=${pageSize}`, {
      }).then((result: AxiosResponse<userPageType>) => result.data)
   },

   postUser: (id: string) => {
      return instance.post(`follow/${id}`, {}, {
      }).then(() => id)
   }
}
