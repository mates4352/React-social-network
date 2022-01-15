import {stateType} from './../App'

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
      personal:  { id: 0, name: "Sergey", description: "description"
      },
   },
   communicationPage: {
      dataMessage: [
         {
            id: 0,
            name: "Sergey1",
            messages: [
               {id: 0, text: "Hello"},
               {id: 1, text: "Bay"},
               {id: 3, text: "Hello"},
               {id: 4, text: "Bay"},
               {id: 5, text: "Hello"},
            ]
         },

         {
            id: 1,
            name: "Sergey2",
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
               {id: 10, text: "Bay"},
               {id: 11, text: "Hello"},
               {id: 12, text: "Bay"},
               {id: 13, text: "Hello"},
               {id: 14, text: "Bay"},
               {id: 15, text: "Bay"},
               {id: 16, text: "Bay"},
               {id: 17, text: "Bay"},
            ]
         },
         {
            id: 2,
            name: "Sergey3",
            messages: [
               {id: 0, text: "Hello"},
            ]
         },

         {
            id: 3,
            name: "Sergey4",
            messages: [
               {id: 0, text: "Hello"},
               {id: 1, text: "Bay"},
            ]
         },

         {
            id: 4,
            name: "Sergey5",
            messages: [
               {id: 0, text: "Hello"},
               {id: 1, text: "Bay"},
               {id: 3, text: "Hello"},
            ]
         },

      ]
   }
}