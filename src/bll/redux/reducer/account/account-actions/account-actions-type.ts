import {addPost, changeValueTextarea, getProfile, getProfileStatus, updateProfileStatus} from "./account-actions";

export type accountActionType = changeValueTextareaType | addPostType | getProfileType | getProfileStatusType | updateProfileStatusType;
export type changeValueTextareaType = ReturnType<typeof changeValueTextarea>
export type addPostType = ReturnType<typeof addPost>
export type getProfileType = ReturnType<typeof getProfile>
export type getProfileStatusType = ReturnType<typeof getProfileStatus>
export type updateProfileStatusType = ReturnType<typeof updateProfileStatus>
