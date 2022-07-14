export const required =(value: string) => {
   return value ? undefined : 'Field is required'
}

export const maxLength10 = (value: string) => {
   return value && value.length > 50 ? `Must be 30 characters or less` : undefined
}

export const maxLength16 = (value: string) => {
   return value && value.length > 16 ? `Must be 16 characters or less` : undefined
}

export const minLength6 = (value: string) => {
   return value && value.length < 6 ? `Must min 6 characters or less` : undefined
}
