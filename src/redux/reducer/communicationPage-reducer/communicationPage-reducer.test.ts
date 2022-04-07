import {
   addTextMessageActionCreate,
   changeValueMessageActionCreate,
   communicationPageReducer,
   communicationPageType
} from "./communicationPage-reducer";

test('communicationPage-reducer test case CHANGE_VALUE_MESSAGE', () => {
   const state: communicationPageType = {
      dialogs: [
         {id: '1', name: "Sergey0"},
         {id: '2', name: "Sergey1"},
         {id: '3', name: "Sergey2"},
         {id: '4', name: "Sergey3"},
         {id: '5', name: "Sergey4"},
      ],

      messages: [
         {id: '1', text: "Hello"},
         {id: '2', text: "Bay"},
         {id: '3', text: "Hello"},
         {id: '4', text: "Bay"},
         {id: '5', text: "Hello"},
         {id: '6', text: "Bay"},
         {id: '7', text: "Hello"},
         {id: '8', text: "Bay"},
         {id: '9', text: "Hello"},
      ],
      textMessage: ''
   }

   const newState = communicationPageReducer(state, changeValueMessageActionCreate('text'))

   expect(state).toEqual({
      dialogs: [
         {id: '1', name: "Sergey0"},
         {id: '2', name: "Sergey1"},
         {id: '3', name: "Sergey2"},
         {id: '4', name: "Sergey3"},
         {id: '5', name: "Sergey4"},
      ],

      messages: [
         {id: '1', text: "Hello"},
         {id: '2', text: "Bay"},
         {id: '3', text: "Hello"},
         {id: '4', text: "Bay"},
         {id: '5', text: "Hello"},
         {id: '6', text: "Bay"},
         {id: '7', text: "Hello"},
         {id: '8', text: "Bay"},
         {id: '9', text: "Hello"},
      ],
      textMessage: ''
   })
   expect(newState.textMessage).toBe('text')
})

test('communicationPage-reducer test case CHANGE_VALUE_MESSAGE', () => {
   const state: communicationPageType = {
      dialogs: [
         {id: '1', name: "Sergey0"},
         {id: '2', name: "Sergey1"},
         {id: '3', name: "Sergey2"},
         {id: '4', name: "Sergey3"},
         {id: '5', name: "Sergey4"},
      ],

      messages: [
         {id: '1', text: "Hello"},
         {id: '2', text: "Bay"},
         {id: '3', text: "Hello"},
         {id: '4', text: "Bay"},
         {id: '5', text: "Hello"},
         {id: '6', text: "Bay"},
         {id: '7', text: "Hello"},
         {id: '8', text: "Bay"},
         {id: '9', text: "Hello"},
      ],
      textMessage: 'lorem'
   }

   const newState = communicationPageReducer(state, addTextMessageActionCreate('Enter'))

   expect(state).toEqual({
      dialogs: [
         {id: '1', name: "Sergey0"},
         {id: '2', name: "Sergey1"},
         {id: '3', name: "Sergey2"},
         {id: '4', name: "Sergey3"},
         {id: '5', name: "Sergey4"},
      ],

      messages: [
         {id: '1', text: "Hello"},
         {id: '2', text: "Bay"},
         {id: '3', text: "Hello"},
         {id: '4', text: "Bay"},
         {id: '5', text: "Hello"},
         {id: '6', text: "Bay"},
         {id: '7', text: "Hello"},
         {id: '8', text: "Bay"},
         {id: '9', text: "Hello"},
      ],
      textMessage: 'lorem'
   })
   expect(newState.messages.length).toBe(10)
})

