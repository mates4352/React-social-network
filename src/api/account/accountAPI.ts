import {instance} from "../instance";

export const accountAPI = {
   getAccount: (userId: string) => {
      return instance.get<profileApiType>(`profile/` + userId).then(result => result.data)
   },

   getStatus: (userId: number) => {
      return instance.get<string>(`profile/status/` + userId).then(result => result.data)
   },

   updateStatus: (status: string) => {
      return instance.put<responseUpdateStatus>(`profile/status` , {status}).then(result => result.data)
   }
}

type responseUpdateStatus = {
   resultCode: number
   messages: string[]
   data: {}
}

export type profileApiType = {
   aboutMe: string
   contacts: contactsApiType
   fullName: string
   lookingForAJob: boolean
   lookingForAJobDescription: string
   photos: photosApiType
   userId: number
}

export type contactsApiType = {
   github: string
   vk: string
   facebook: string
   instagram: string
   twitter: string
   website: string
   youtube: string
   mainLink: string
}

export type photosApiType = {
   small: string
   large: string
}
