export const required = value => value ? undefined : 'error'

export const maxLengthCreator = (maxLength) => value => {
    return value && value.length <= maxLength ? undefined : `Max length is ${maxLength}`
}