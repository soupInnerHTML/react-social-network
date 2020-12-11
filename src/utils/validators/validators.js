export const required = value => value ? undefined : 'The field is required'

export const maxLengthCreator = (maxLength) => value => {
    return value && value.length > maxLength ? `Max length is ${maxLength}` : undefined
}

export const minLengthCreator = (minLength) => value => {
    return value && value.length < minLength ? `Min length is ${minLength}` : undefined
}

const PhoneNumberCheck = value => {
    return /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(value) ? undefined : 'Невернй номер или email'
}

export const emailAndPhoneNumberCheck = value => {
    let emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return emailPattern.test(value) ? undefined : PhoneNumberCheck(value)
}