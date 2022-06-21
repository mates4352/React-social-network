import {userPageType, usersPageReducer} from "../usersPageReducer";
import {
   changeFollowUser, changeIsDisabled,
   changePagination, setTotalCount,
   setUsers
} from "../usersPageReducer-create-actions";

let state: userPageType = {
   items: [],
   pageSize: 5,
   totalCount: 0,
   currentPage: 1,
   error: null,
   isDisabled: [],
}

beforeEach(() => {
   state = {
      items: [],
      pageSize: 5,
      totalCount: 0,
      currentPage: 1,
      error: null,
      isDisabled: [],
   }
})

test('test case CHANGE-FOLLOW-USER', () => {
   const state: userPageType = {
      items: [
         {id: '0', followed: true, name: "Sergey", photos: {small: null, large: null}, status: true},
         {id: '1', followed: false, name: "Sergey", photos: {small: null, large: null}, status: true},
      ],
      pageSize: 5,
      totalCount: 0,
      currentPage: 1,
      error: null,
      isDisabled:[]
   }

   const newState =  usersPageReducer(state, changeFollowUser('0'))

   expect(state).toEqual(state)
   expect(state.items[1]).toBe(newState.items[1])
   expect(newState.items[0].followed).toBeFalsy()
   expect(newState.pageSize).toBe(5)
   expect(newState.totalCount).toBe(0)
   expect(newState.currentPage).toBe(1)
   expect(newState.error).toBeNull()
})

test('test case SET-USERS', () => {
   const newState =  usersPageReducer(state, setUsers(
       [
          {id: '0', followed: true, name: "Sergey", photos: {small: null, large: null}, status: true},
          {id: '1', followed: false, name: "Sergey", photos: {small: null, large: null}, status: true},
       ],
   ))

   expect(state).toEqual(state)
   expect(state.items[1]).toBeUndefined()

   expect(newState.items.length).toBe(2)
   expect(newState.pageSize).toBe(5)
   expect(newState.totalCount).toBe(0)
   expect(newState.currentPage).toBe(1)
   expect(newState.error).toBeNull()
   expect(newState.isDisabled?.[0]).toBeUndefined()
})

test('test case CHANGE-PAGINATION', () => {
   const newState =  usersPageReducer(state, changePagination(4))

   expect(state).toEqual(state)
   expect(newState.items.length).toBe(0)
   expect(newState.pageSize).toBe(5)
   expect(newState.totalCount).toBe(0)
   expect(newState.currentPage).toBe(4)
   expect(newState.error).toBeNull()
   expect(newState.isDisabled?.[0]).toBeUndefined()
})

test('test case SET-TOTAL-COUNT', () => {
   const newState =  usersPageReducer(state, setTotalCount(5))

   expect(state).toEqual(state)
   expect(newState.items.length).toBe(0)
   expect(newState.pageSize).toBe(5)
   expect(newState.totalCount).toBe(5)
   expect(newState.currentPage).toBe(1)
   expect(newState.error).toBeNull()
   expect(newState.isDisabled?.[0]).toBeUndefined()
})

test('test case CHANGE-IS-DISABLED', () => {
   let newState =  usersPageReducer(state, changeIsDisabled(true, '1'));

   const testUsers = () => {
      expect(state).toEqual(state)
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



