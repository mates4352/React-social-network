import {authReducer, authType} from "../auth-reducer";
import {changeAuthData} from "../auth-reducer-create-actions";

let state: authType = {
   data:{
      id: null,
      login: null,
      email: null
   },
   messages: [],
   fieldsErrors: [],
   resultCode: 1
}

beforeEach(() => {
   state = {
      data: {
         id: 1,
         login: 'Sergey',
         email: 'sergey@mail.ru'
      },
      messages: [],
      fieldsErrors: [],
      resultCode: 0
   }
})

it('test case SET-AUTH-DATA', () => {
   const action = changeAuthData(0,2, 'Dima', 'dima@mail.ru');
   const newState = authReducer(state, action);

   expect(state).toEqual(state);
   expect(state.messages).toBe(newState.messages);
   expect(state.fieldsErrors).toBe(newState.fieldsErrors);
   expect(newState.resultCode).toBe(0);
   expect(newState.data.id).toBe(2);
   expect(newState.data.login).toBe('Dima');
   expect(newState.data.email).toBe('dima@mail.ru');
})
