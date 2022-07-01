import {Actions_Type} from "../../Actions-Type";
import {profileType} from "../account-page-reducer";

export const addPost = () => (
    {type: Actions_Type.ADD_POST} as const
)

export const changeValueTextarea = (text: string) => (
    {type: Actions_Type.CHANGE_VALUE_TEXTAREA, text} as const
)

export const getProfile = (profile: profileType) => (
    {type: Actions_Type.GET_PROFILE, profile} as const
)
