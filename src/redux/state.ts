import {renderUi} from "../render";
import {datePostType} from "../features/account/components/post/post";

export type stateType = {
   accountPage: accountPageType
   communicationPage: communicationDateType
}
export type accountPageType = {
   datePost: Array<datePostType>
   personal: dataPersonalType
};
export type dataPersonalType = {
   id: number
   name: string
   description: string
};
export type dateMessageType = {
   id: number
   name: string
};
export type communicationDateType = {
   dialogs: Array<dateMessageType>
   messages : Array<dataDialogsType>
}
export type dataDialogsType = {
   id: number,
   text: string
}

export const state: stateType  = {
   accountPage: {
      datePost: [
         {
            id: 0,
            text: "lorem lorem lorem lorem lorem",
            time: "2022-01-10",
         },

         {
            id: 1,
            text: "text",
            time: "2022-01-10",
         }
      ],
      personal:  { id: 0, name: "Sergey", description: "description"},
   },
   communicationPage: {
      dialogs: [
         {id: 0,name: "Sergey0"},
         {id: 1,name: "Sergey1"},
         {id: 2,name: "Sergey2"},
         {id: 3,name: "Sergey3"},
         {id: 4,name: "Sergey4"},
      ],

      messages: [
         {id: 0, text: "Hello"},
         {id: 1, text: "Bay"},
         {id: 3, text: "Hello"},
         {id: 4, text: "Bay"},
         {id: 5, text: "Hello"},
         {id: 6, text: "Bay"},
         {id: 7, text: "Hello"},
         {id: 8, text: "Bay"},
         {id: 9, text: "Hello"},
      ]
   }
}

export const addPost = (text: string) => {
   state.accountPage.datePost.push({id: state.accountPage.datePost.length, text: text, time: "2022-01-10" })
   renderUi(state)
}
