import {v1} from "uuid";

export type storeType = {
   state: stateType
   renderUi: (store: storeType) => void
   subscribe: (observer: any) => void
}
export type stateType = {
   accountPage: accountPageType
   communicationPage: communicationDateType
}
export type accountPageType = {
   datePost: Array<datePostType>
   valueTextarea: string
   personal: dataPersonalType
   addPost: () => void
   changeValueTextarea: (text: string) => void
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
   state: {
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
         addPost() {
            let post = store.state.accountPage.datePost;
            const newPost = {id: v1(), text: store.state.accountPage.valueTextarea, time: "2022-01-10"};

            post.push(newPost);
            store.state.accountPage.valueTextarea = '';
            store.renderUi(store);
         },
         changeValueTextarea: (text: string) => {
            store.state.accountPage.valueTextarea = text;
            store.renderUi(store);
         },
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
   renderUi: (store: storeType) => {},
   subscribe: (observer: any) => {
      store.renderUi = observer;
   }
}
