import {userPageType, usersPageReducer} from "../usersPageReducer";
import {
   changeFollowUserActionCreate,
   changePaginationActionCreate, getTotalCountActionCreate,
   getUsersActionCreate
} from "../usersPageReducer-create-actions";

test('test function usersPageReducer', () => {
   const state: userPageType = {
      items: [
         {id: '0', follow: true, name: "Sergey", photos: {small: null, large: null}, status: true},
         {id: '1', follow: false, name: "Sergey", photos: {small: null, large: null}, status: true},
      ],
      pageSize: 5,
      totalCount: 0,
      currentPage: 1,
      error: null,
   }

   const newState =  usersPageReducer(state, changeFollowUserActionCreate('0'))

   expect(state).toEqual({
      items: [
         {id: '0', follow: true, name: "Sergey", photos: {small: null, large: null}, status: true},
         {id: '1', follow: false, name: "Sergey", photos: {small: null, large: null}, status: true},
      ],
      pageSize: 5,
      totalCount: 0,
      currentPage: 1,
      error: null,
   })
   expect(state.items[1]).toBe(newState.items[1])
   expect(newState.items[0].follow).toBeFalsy()
   expect(newState.pageSize).toBe(5)
   expect(newState.totalCount).toBe(0)
   expect(newState.currentPage).toBe(1)
   expect(newState.error).toBeNull()
})

test('test function usersPageReducer', () => {
   const state: userPageType = {
      items: [],
      pageSize: 5,
      totalCount: 0,
      currentPage: 1,
      error: null,
   }
   const newState =  usersPageReducer(state, getUsersActionCreate(
       [
          {id: '0', follow: true, name: "Sergey", photos: {small: null, large: null}, status: true},
          {id: '1', follow: false, name: "Sergey", photos: {small: null, large: null}, status: true},
       ],
   ))

   expect(state).toEqual({
      items: [],
      pageSize: 5,
      totalCount: 0,
      currentPage: 1,
      error: null,
   })
   expect(state.items[1]).toBeUndefined()

   expect(newState.items.length).toBe(2)
   expect(newState.pageSize).toBe(5)
   expect(newState.totalCount).toBe(0)
   expect(newState.currentPage).toBe(1)
   expect(newState.error).toBeNull()

})

test('test function change-pagination', () => {
   const state: userPageType = {
      items: [],
      pageSize: 5,
      totalCount: 0,
      currentPage: 1,
      error: null,
   }
   const newState =  usersPageReducer(state, changePaginationActionCreate(4))

   expect(state).toEqual({
      items: [],
      pageSize: 5,
      totalCount: 0,
      currentPage: 1,
      error: null,
   })
   expect(newState.items.length).toBe(0)
   expect(newState.pageSize).toBe(5)
   expect(newState.totalCount).toBe(0)
   expect(newState.currentPage).toBe(4)
   expect(newState.error).toBeNull()
})

test('test function total-count', () => {
   const state: userPageType = {
      items: [],
      pageSize: 5,
      totalCount: 0,
      currentPage: 1,
      error: null,
   }
   const newState =  usersPageReducer(state, getTotalCountActionCreate(5))

   expect(state).toEqual({
      items: [],
      pageSize: 5,
      totalCount: 0,
      currentPage: 1,
      error: null,
   })
   expect(newState.items.length).toBe(0)
   expect(newState.pageSize).toBe(5)
   expect(newState.totalCount).toBe(5)
   expect(newState.currentPage).toBe(1)
   expect(newState.error).toBeNull()
})


