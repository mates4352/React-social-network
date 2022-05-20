import axios from "axios";

export const instance = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: {
      'API-KEY': 'fe4f2da0-2f1f-44f8-8de0-8e2408e034ed',
   }
})
