import {Actions_Type} from "../../Actions-Type";
import {profileType} from "../account-page-reducer";
import {v1} from "uuid";

export const addPost = (value: string) => {
   const post = {id: v1(), text: value, time: "2022-01-10"};
   return {type: Actions_Type.ADD_POST, post} as const
}

export const changeValueTextarea = (text: string) => (
    {type: Actions_Type.CHANGE_VALUE_TEXTAREA, text} as const
)

export const getProfile = (profile: profileType) => (
    {type: Actions_Type.GET_PROFILE, profile} as const
)
