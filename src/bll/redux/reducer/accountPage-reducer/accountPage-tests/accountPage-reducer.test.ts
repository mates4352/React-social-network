import {accountPageType} from "../accountPage-reducer";
import {accountPageReducer} from "../accountPage-reducer";
import {addPostActionCreate, changeValueTextareaActionCreate} from "../accountPage-create-actions";

test('test case CHANGE_VALUE_TEXTAREA', () => {
   const state: accountPageType = {
      datePost: [
         {
            id: '1',
            text: "lorem lorem lorem lorem lorem",
            time: "2022-01-10",
         },

         {
            id: '2',
            text: "text",
            time: "2022-01-10",
         }
      ],
      valueTextarea: '',
      personal: {id: '1', name: "Sergey", description: "description"},
   }

   const newState = accountPageReducer(state, changeValueTextareaActionCreate('text'))

   expect(state).toEqual({
      datePost: [
         {
            id: '1',
            text: "lorem lorem lorem lorem lorem",
            time: "2022-01-10",
         },

         {
            id: '2',
            text: "text",
            time: "2022-01-10",
         }
      ],
      valueTextarea: '',
      personal: {id: '1', name: "Sergey", description: "description"},
   })
   expect(newState.valueTextarea).toBe('text')
})

test('test case ADD_POST', () => {
   const state: accountPageType = {
      datePost: [
         {
            id: '1',
            text: "lorem lorem lorem lorem lorem",
            time: "2022-01-10",
         },

         {
            id: '2',
            text: "text",
            time: "2022-01-10",
         }
      ],
      valueTextarea: '',
      personal: {id: '1', name: "Sergey", description: "description"},
   }

   const newState = accountPageReducer(state, addPostActionCreate())

   expect(state).toEqual({
      datePost: [
         {
            id: '1',
            text: "lorem lorem lorem lorem lorem",
            time: "2022-01-10",
         },

         {
            id: '2',
            text: "text",
            time: "2022-01-10",
         }
      ],
      valueTextarea: '',
      personal: {id: '1', name: "Sergey", description: "description"},
   })
   state.valueTextarea.trim() !== '' && expect(newState.datePost.length).toBe(3)
})
