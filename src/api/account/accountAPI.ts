import {AxiosResponse} from "axios";
import {profileType} from "../../bll/redux/reducer/accountPage-reducer/accountPage-reducer";
import {instance} from "../instance";

export const accountAPI = {
   getAccount: (id: string) => {
      return instance.get(`profile/` + id).then((result: AxiosResponse<profileType>) => result.data)
   }
}
