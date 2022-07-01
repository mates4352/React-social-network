import {
   communicationPageReducer,
   communicationPageType
} from "../communication-page-reducer";
import {addTextMessage, changeValueMessage} from "../communication-page-create-actions/communication-page-create-actions";

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

it('test case CHANGE_VALUE_MESSAGE', () => {
   const newState = communicationPageReducer(state, changeValueMessage('text'))

   expect(state).toEqual(state)
   expect(newState.textMessage).toBe('text')
})

it('test case ADD_MESSAGE', () => {
   const newState = communicationPageReducer(state, addTextMessage('Enter', 'text'))
   const newState2 = communicationPageReducer(state, addTextMessage('', 'text'))

   expect(state).toEqual(state)
   state.textMessage.trim() !== '' && expect(newState.messages.length).toBe(10)
   state.textMessage.trim() !== '' && expect(newState2.messages.length).toBe(9)
   expect(newState.messages[9].text).toBe('text')
   expect(newState.dialogs.length).toBe(5)
})
