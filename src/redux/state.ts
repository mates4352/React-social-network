import {v1} from "uuid";

export type storeType = {
   _state: stateType
   getState: () => stateType
   addPost: () => void
   changeValueTextarea: (text: string) => void
   _subscribe: (state: stateType) => void
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
}
export type dataDialogsType = {
   id: string,
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
         ]
      }
   },
   getState() {
      return this._state
   },
   changeValueTextarea(text: string) {
      this._state.accountPage.valueTextarea = text;
      this._subscribe(this._state);
   },
   addPost() {
      let post = this._state.accountPage.datePost;
      const newPost = {id: v1(), text: this._state.accountPage.valueTextarea, time: "2022-01-10"};

      post.push(newPost);
      this._state.accountPage.valueTextarea = '';
      this._subscribe(this._state);
   },
   _subscribe() {},
   subscribe(observer) {
      this._subscribe = observer;
   }
}
