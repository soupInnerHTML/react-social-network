export const required = value => value ? undefined : 'The field is required'

export const maxLengthCreator = (maxLength) => value => {
    return value && value.length > maxLength ? `Max length is ${maxLength}` : undefined
}

export const minLengthCreator = (minLength) => value => {
    return value && value.length < minLength ? `Min length is ${minLength}` : undefined
}