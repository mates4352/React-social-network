import {instance} from "../instance";
import {authType} from "../../bll/redux/reducer/auth-reducer/auth-reducer";

export const authAPI = {
   getMeProfile: () => {
      return instance.get<authType>('auth/me').then((result) => result.data.data)
   }
}

