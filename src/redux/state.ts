import {renderUi} from "../render";
import {v1} from "uuid";

export type stateType = {
   accountPage: accountPageType
   communicationPage: communicationDateType
}
export type accountPageType = {
   datePost: Array<datePostType>
   personal: dataPersonalType
};
export type datePostType = {
   id: string
   text: string
   time: string
};
export type dataPersonalType = {
   id: string
   name: string
   description: string
};
export type dateMessageType = {
   id: string
   name: string
};
export type communicationDateType = {
   dialogs: Array<dateMessageType>
   messages: Array<dataDialogsType>
}
export type dataDialogsType = {
   id: string,
   text: string
}

export const state: stateType = {
   accountPage: {
      datePost: [
         {
            id: v1(),
            text: "lorem lorem lorem lorem lorem",
            time: "2022-01-10",
         },

         {
            id: v1(),
            text: "text",
            time: "2022-01-10",
         }
      ],
      personal: {id: v1(), name: "Sergey", description: "description"},
   },
   communicationPage: {
      dialogs: [
         {id: v1(), name: "Sergey0"},
         {id: v1(), name: "Sergey1"},
         {id: v1(), name: "Sergey2"},
         {id: v1(), name: "Sergey3"},
         {id: v1(), name: "Sergey4"},
      ],

      messages: [
         {id: v1(), text: "Hello"},
         {id: v1(), text: "Bay"},
         {id: v1(), text: "Hello"},
         {id: v1(), text: "Bay"},
         {id: v1(), text: "Hello"},
         {id: v1(), text: "Bay"},
         {id: v1(), text: "Hello"},
         {id: v1(), text: "Bay"},
         {id: v1(), text: "Hello"},
      ]
   }
}

export const addPost = (text: string) => {
   state.accountPage.datePost.push({id: v1(), text: text, time: "2022-01-10"})
   renderUi(state)
}
