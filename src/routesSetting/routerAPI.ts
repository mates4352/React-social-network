export const routerAPI: routerAPI = {
   '/': {
      path: '/Account',
   },

   Account: {
      path: '/Account', parameter: ':id'
   },

   Communication: {
      path: '/Communication/*',
   },

   User: {
      path: '/User',
   },

   Music: {
      path: '/Music',
   },

   News: {
      path: '/News',
   },

   Settings: {
      path: '/Settings',
   },

   Help: {
      path: '/Help',
   },

   '*': {
      path: '/*',
   },
}

type routerAPI = {
   "/": pathType<'/Account'>
   Account: pathType<'/Account'>
   Communication: pathType<'/Communication/*'>
   User: pathType<'/User'>
   Music: pathType<'/Music'>
   News: pathType<'/News'>
   Settings: pathType<'/Settings'>
   Help: pathType<'/Help'>
   "*": pathType<'/*'>
}

type pathType<T, P = ':id'> = {
   path: string & T,
   parameter?: P
}
