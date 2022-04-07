import {v1} from "uuid";
import {
   accountPageReducer,
   addPostType,
   changeValueTextareaType
} from "./reducer/accountPage-reducer/accountPage-reducer";
import {addTextMessageType, changeValueMessageType, communicationPageReducer} from "./reducer/communicationPage-reducer/communicationPage-reducer";

export type storeType = {
   _state: stateType
   _subscribe: () => void
   dispatch: (action: actionType) => void
   getState: () => stateType
   subscribe: (observer: () => void) => void
}
export type stateType = {
   accountPage: accountPageType
   communicationPage: communicationDateType
}
export type accountPageType = {
   datePost: Array<datePostType>
   valueTextarea: string
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
export type communicationDateType = {
   dialogs: Array<dateMessageType>
   messages: Array<dataDialogsType>
   textMessage: string
}
export type dataDialogsType = {
   id: string,
   text: string
}
export type dateMessageType = {
   id: string
   name: string
};
export type actionType = changeValueTextareaType | addPostType | addTextMessageType | changeValueMessageType

export const store: storeType = {
   _state: {
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
         valueTextarea: '',
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
         ],
         textMessage: ''
      }
   },
   getState() {
      return this._state
   },
   _subscribe() {},
   dispatch(action) {
      this._state.accountPage = accountPageReducer(this._state.accountPage, action)
      this._state.communicationPage = communicationPageReducer(this._state.communicationPage, action)
      this._subscribe()
   },
   subscribe(observer) {
      this._subscribe = observer;
   }
}
