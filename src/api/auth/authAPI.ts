import {instance} from "../instance";

export const authAPI = {
   getMeProfile: () => {
      return instance.get<authApiType>('auth/me').then(result => result.data)
   }
}

export type authApiType = {
   data: authDataApiType
   fieldsErrors:[]
   messages:[]
   resultCode: null | number
}

export type authDataApiType = {
   id: null | number,
   login: string,
   email: string
}

