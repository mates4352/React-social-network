import {changeFollowUserActionCreate, userPageType, usersPageReducer} from "./usersPageReducer";

test('test function usersPageReducer', () => {
   const state: userPageType = {
      users: [
         {id: '0', follow: true, name: "Sergey", location: {city: 'Cerov', country: 'Russian'}},
         {id: '1', follow: true, name: "Sergey", location: {city: 'Cerov', country: 'Russian'}}
      ]
   }

   const newState =  usersPageReducer(state, changeFollowUserActionCreate('0'))

   expect(state).toEqual({
      users: [
         {id: '0', follow: true, name: "Sergey", location: {city: 'Cerov', country: 'Russian'}},
         {id: '1', follow: true, name: "Sergey", location: {city: 'Cerov', country: 'Russian'}}
      ]
   })
   expect(state.users[1]).toBe(newState.users[1])
   expect(newState.users[0].follow).toBeFalsy()
})
