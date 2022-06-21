import {profileType} from "../../bll/redux/reducer/accountPage-reducer/accountPage-reducer";
import {instance} from "../instance";

export const accountAPI = {
   getAccount: (id: string) => {
      return instance.get<profileType>(`profile/` + id).then((result) => result.data)
   }
}
