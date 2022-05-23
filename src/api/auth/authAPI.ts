import {AxiosResponse} from "axios";
import {instance} from "../instance";
import {authType} from "../../bll/redux/reducer/auth-reducer/auth-reducer";

export const authAPI = {
   getMeProfile: () => {
      return instance.get('auth/me').then((result: AxiosResponse<authType>) => result.data.data)
   }
}

