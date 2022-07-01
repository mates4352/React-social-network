import {instance} from "../instance";

export const accountAPI = {
   getAccount: (userId: string) => {
      return instance.get<profileApiType>(`profile/` + userId).then(result => result.data)
   }
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
   github: null | string
   vk: null | string
   facebook: null | string
   instagram: null | string
   twitter: null | string
   website: null | string
   youtube: null | string
   mainLink: null | string
}

export type photosApiType = {
   small: null | string
   large: null | string
}
