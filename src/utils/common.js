export let submitAndClear = (e, handleSubmit, reset) => {
    e.preventDefault()
    handleSubmit()
    reset()
}