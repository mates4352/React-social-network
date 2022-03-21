import {v1} from "uuid";

const ADD_POST = 'ADD-POST';
const CHANGE_VALUE_TEXTAREA = 'CHANGE-VALUE-TEXTAREA';
const ADD_VALUE_MESSAGE = 'ADD-VALUE-MESSAGE';
const CHANGE_VALUE_MESSAGE = 'CHANGE-VALUE-MESSAGE';

export type storeType = {
   _state: stateType
   _subscribe: (state: stateType) => void
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
export type dateMessageType = {
   id: string
   name: string
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
export type actionType = changeValueTextareaType | addPostType | addTextMessageType | changeTextMessageType
export type changeValueTextareaType = {
   type: 'CHANGE-VALUE-TEXTAREA',
   text: string
}
export type addPostType = {
   type: 'ADD-POST'
}
export type addTextMessageType = {
   type: 'ADD-VALUE-MESSAGE',
}
export type changeTextMessageType = {
   type: 'CHANGE-VALUE-MESSAGE',
   text: string
}

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
      if(action.type === CHANGE_VALUE_TEXTAREA) {
         this._state.accountPage.valueTextarea = action.text;
         this._subscribe(this._state);
      }
      else if(action.type === ADD_POST) {
         let post = this._state.accountPage.datePost;
         const newPost = {id: v1(), text: this._state.accountPage.valueTextarea, time: "2022-01-10"};

         post.push(newPost);
         this._state.accountPage.valueTextarea = '';
         this._subscribe(this._state);
      }
      else if (action.type === CHANGE_VALUE_MESSAGE) {
         this._state.communicationPage.textMessage = action.text;
         this._subscribe(this._state);
      }
      else if (action.type === ADD_VALUE_MESSAGE) {
         const message = this._state.communicationPage.textMessage;
         this._state.communicationPage.messages.push({id: v1(), text: message})
         this._state.communicationPage.textMessage = ''
         this._subscribe(this._state)
      }


   },
   subscribe(observer) {
      this._subscribe = observer;
   }
}

export const addPostActionCreate = ():addPostType => ({type: ADD_POST})
export const changeValueTextareaActionCreate = (text: string):changeValueTextareaType => (
    {type: CHANGE_VALUE_TEXTAREA, text: text}
)

export const addTextMessage = ():addTextMessageType => ({type: ADD_VALUE_MESSAGE})
export const changeTextMessage = (text: string):changeTextMessageType => (
    {type: CHANGE_VALUE_MESSAGE, text: text}
)
