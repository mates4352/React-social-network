import {addPost, changeValueTextarea, getProfile} from "./account-page-create-actions";

export type accountActionType = changeValueTextareaType | addPostType | getProfileType;
export type changeValueTextareaType = ReturnType<typeof changeValueTextarea>
export type addPostType = ReturnType<typeof addPost>
export type getProfileType = ReturnType<typeof getProfile>
