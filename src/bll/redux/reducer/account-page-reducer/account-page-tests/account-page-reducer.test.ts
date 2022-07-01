import {accountPageType} from "../account-page-reducer";
import {accountPageReducer} from "../account-page-reducer";
import {addPost, changeValueTextarea, getProfile} from "../account-page-create-actions/account-page-create-actions";

let state: accountPageType = {
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

beforeEach(() => {
   state = {
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
})

it('test case CHANGE_VALUE_TEXTAREA', () => {
   const newState = accountPageReducer(state, changeValueTextarea('text'))

   expect(state).toEqual(state)
   expect(newState.valueTextarea).toBe('text')
})

it('test case ADD_POST', () => {
   const newState = accountPageReducer(state, addPost())

   expect(state).toEqual(state)
   state.valueTextarea.trim() !== '' && expect(newState.datePost.length).toBe(3)
})

it('test case GET_PROFILE', () => {
   const newState = getProfile({
      aboutMe: "я круто чувак 1001%",
      contacts: {facebook: 'facebook.com', mainLink: "https://github.com/OlegJBAc", youtube: null, github: "https://github.com/OlegJBAc", website: null, vk: 'vk.com/dimych', twitter: 'https://twitter.com/@sdf', instagram: 'instagra.com/sds'},
      fullName: "samurai dimych",
      lookingForAJob: true,
      lookingForAJobDescription: "не ищу, а дурачусь",
      photos: {small: 'https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0', large: 'https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0'},
      userId: 2,
   })

   expect(state).toEqual(state)
   expect(newState.profile.aboutMe).toBe("я круто чувак 1001%")
})

