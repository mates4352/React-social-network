import {
   communicationReducer,
   communicationPageType
} from "../communication-reducer";
import {addTextMessage} from "../communication-actions/communication-actions";

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
}

it('test case ADD_MESSAGE', () => {
   const newState = communicationReducer(state, addTextMessage('text'))

   expect(state).toEqual(state)
   expect(newState.messages[9].text).toBe('text')
   expect(newState.dialogs.length).toBe(5)
})
