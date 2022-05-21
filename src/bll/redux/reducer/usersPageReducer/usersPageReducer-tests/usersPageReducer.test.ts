import {userPageType, usersPageReducer} from "../usersPageReducer";
import {
   changeFollowUser, changeIsDisabled,
   changePagination, setTotalCount,
   setUsers
} from "../usersPageReducer-create-actions";

test('test function usersPageReducer', () => {
   const state: userPageType = {
      items: [
         {id: '0', followed: true, name: "Sergey", photos: {small: null, large: null}, status: true},
         {id: '1', followed: false, name: "Sergey", photos: {small: null, large: null}, status: true},
      ],
      pageSize: 5,
      totalCount: 0,
      currentPage: 1,
      error: null,
   }

   const newState =  usersPageReducer(state, changeFollowUser('0'))

   expect(state).toEqual({
      items: [
         {id: '0', followed: true, name: "Sergey", photos: {small: null, large: null}, status: true},
         {id: '1', followed: false, name: "Sergey", photos: {small: null, large: null}, status: true},
      ],
      pageSize: 5,
      totalCount: 0,
      currentPage: 1,
      error: null,
   })
   expect(state.items[1]).toBe(newState.items[1])
   expect(newState.items[0].followed).toBeFalsy()
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
   const newState =  usersPageReducer(state, setUsers(
       [
          {id: '0', followed: true, name: "Sergey", photos: {small: null, large: null}, status: true},
          {id: '1', followed: false, name: "Sergey", photos: {small: null, large: null}, status: true},
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
   const newState =  usersPageReducer(state, changePagination(4))

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
   const newState =  usersPageReducer(state, setTotalCount(5))

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

test('test function change-is-disabled', () => {
   const state: userPageType = {
      items: [],
      pageSize: 5,
      totalCount: 0,
      currentPage: 1,
      error: null,
      isDisabled: [],
   }

   let newState =  usersPageReducer(state, changeIsDisabled(true, '1'));

   const testUsers = () => {
      expect(state).toEqual({
         items: [],
         pageSize: 5,
         totalCount: 0,
         currentPage: 1,
         error: null,
         isDisabled: [],
      })
      expect(newState.items.length).toBe(0)
      expect(newState.pageSize).toBe(5)
      expect(newState.totalCount).toBe(0)
      expect(newState.currentPage).toBe(1)
      expect(newState.error).toBe(null)
   }
   testUsers()
   expect(newState.isDisabled?.length).toBe(1)
   expect(newState.isDisabled?.[0]).toBe('1')

   newState =  usersPageReducer(state, changeIsDisabled(false, '1'));

   testUsers()
   expect(newState.isDisabled?.length).toBe(0)
   expect(newState.isDisabled?.[0]).toBeUndefined()
})



