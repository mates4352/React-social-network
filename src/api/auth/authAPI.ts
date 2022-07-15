import {instance} from "../instance";

export const authAPI = {
   getMeProfile: () => {
      return instance.get<authApiType<authDataApiType>>('auth/me').then(result => result.data)
   },

   getCaptcha: () => {
      return instance.get<captchaType>('/security/get-captcha-url').then(result => result.data)
   },

   login: (dataFormLogin: authDataFormLoginType) => {
      return instance.post<authApiType<{userId: number}>>('auth/login', dataFormLogin).then(result => result.data)
   },

   logout: () => {
      return instance.delete<authApiType<{}>>('auth/login').then(result => result.data)
   }
}

export type authApiType<T> = {
   data: T
   messages:[]
   fieldsErrors: []
   resultCode: null | number
   captcha?: string
}

export type authDataApiType = {
   id: null | number,
   login: string,
   email: string
}

export type authDataFormLoginType = {
   emailL: string
   passwordL: string
   rememberMeL: boolean
   captcha?: string
}

export type captchaType = {
   url: string
}
