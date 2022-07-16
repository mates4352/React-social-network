export const appPageRouterApi: appPageRouterApiType = {
   '/': {
      path: '/',
   },

   '/*': {
      path: '/*',
   },

   Login: {
      path: '/Login',
   },

   Main: {
      path: '/Main',
   },

   'Main*': {
      path: '/Main/*',
   },

   redirect: {
      Login: '/login',
      Main: '/Main',
      ["/Main/Account"]: '/Main/Account'
   }
}

type appPageRouterApiType = {
   "/": pathType<'/'>
   "/*": pathType<'/*'>
   "Login": pathType<'/Login'>
   "Main": pathType<'/Main'>
   "Main*": pathType<'/Main/*'>
   redirect: {
      Login: '/login'
      Main: '/Main'
      ["/Main/Account"]: '/Main/Account'
   }
}

type pathType<T, P = ':id'> = {
   path: string & T,
   parameter?: P
}
