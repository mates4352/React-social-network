import {accountPageType} from "../accountPage-reducer";
import {accountPageReducer} from "../accountPage-reducer";
import {addPost, changeValueTextarea, getProfile} from "../accountPage-create-actions";
import exp from "constants";

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
      profile: null,
   }

   const newState = accountPageReducer(state, changeValueTextarea('text'))

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
      profile: null,
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
      profile: null,
   }

   const newState = accountPageReducer(state, addPost())

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
      profile: null,
   })
   state.valueTextarea.trim() !== '' && expect(newState.datePost.length).toBe(3)
})

test('test case GET_PROFILE', () => {
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
      profile: null,
   }

   const newState = getProfile({
      aboutMe: "я круто чувак 1001%",
      contacts: {facebook: 'facebook.com', website: null, vk: 'vk.com/dimych', twitter: 'https://twitter.com/@sdf', instagram: 'instagra.com/sds'},
      fullName: "samurai dimych",
      lookingForAJob: true,
      lookingForAJobDescription: "не ищу, а дурачусь",
      photos: {small: 'https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0', large: 'https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0'},
      userId: 2,
   })

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
      profile: null,
      personal: {id: '1', name: "Sergey", description: "description"},
   })
   expect(newState.profile.aboutMe).toBe("я круто чувак 1001%")
})

