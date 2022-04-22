import {changeFollowUserActionCreate, getUsersActionCreate, userPageType, usersPageReducer} from "./usersPageReducer";

test('test function usersPageReducer', () => {
   const state: userPageType = {
      items: [
         {id: '0', follow: true, name: "Sergey", photos: {small: null, large: null}, status: true},
         {id: '1', follow: false, name: "Sergey", photos: {small: null, large: null}, status: true},
      ],
      error: null,
      totalCount: null
   }

   const newState =  usersPageReducer(state, changeFollowUserActionCreate('0'))

   expect(state).toEqual({
      items: [
         {id: '0', follow: true, name: "Sergey", photos: {small: null, large: null}, status: true},
         {id: '1', follow: false, name: "Sergey", photos: {small: null, large: null}, status: true},
      ],
      error: null,
      totalCount: null
   })
   expect(state.items[1]).toBe(newState.items[1])
   expect(newState.items[0].follow).toBeFalsy()
   expect(newState.error).toBeNull()
   expect(newState.totalCount).toBeNull()
})

test('test function usersPageReducer', () => {
   const state: userPageType = {
      items: [],
      error: null,
      totalCount: null
   }
   const newState =  usersPageReducer(state, getUsersActionCreate(
       [
          {id: '0', follow: true, name: "Sergey", photos: {small: null, large: null}, status: true},
          {id: '1', follow: false, name: "Sergey", photos: {small: null, large: null}, status: true},
       ],
   ))

   expect(state).toEqual({
      items: [],
      error: null,
      totalCount: null
   })
   expect(state.items[1]).toBeUndefined()

   expect(newState.items.length).toBe(2)
   expect(newState.error).toBeNull()
   expect(newState.totalCount).toBeNull()
})
