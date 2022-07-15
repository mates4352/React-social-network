import {authReducer, authType} from "../auth-reducer";
import {changeAuthData} from "../auth-actions/auth-actions";

let state: authType = {
   data:{
      id: 0,
      login: '',
      email: ''
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
      fieldsErrors: [],
      messages: [],
      resultCode: 0
   }
})

it('test case SET-AUTH-DATA', () => {
   const action = changeAuthData({data: {id: 2, login: 'Dima', email: 'dima@mail.ru'}, fieldsErrors: [], messages: [], resultCode: 0});
   const newState = authReducer(state, action);

   expect(state).toEqual(state);
   expect(state.messages).toBe(newState.messages);
   expect(newState.resultCode).toBe(0);
   expect(newState.data.id).toBe(2);
   expect(newState.data.login).toBe('Dima');
   expect(newState.data.email).toBe('dima@mail.ru');
})
