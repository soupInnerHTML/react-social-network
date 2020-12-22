import { createSelector } from "reselect"

export const getPageSize = state => state.users.pageSize
export const getUsersData = state => state.users.usersData
export const getUsersQuantity = state => state.users.usersQuantity
export const getCurrentPage = state => state.users.currentPage
export const getAuthId = state => state.auth.id
export const getIsNotAuth = state => state.auth.isNotAuth
export const getStatus = state => state.profilePage.status
export const getProfileData = state => state.profilePage.profileData
export const getCaptcha = state => state.auth.captcha

export const maxCurrentPage = createSelector(getPageSize, getUsersQuantity, (pageSize, usersQuantity) => {
    return Math.ceil(usersQuantity / pageSize)
})

// селекторы нужны, чтобы:
// 1. Инкапсулировать логику. Например, как в maxCurrentPage()
// 2. Объединить одинаковый код из разных файлов в одну f(x) и вызывать ее там === не менять значение в каждом файле
// createSelector нужен, чтобы избежать частой перерисовки компонент из-за использования обычных селекторов, которые зависят от других селекторов, используя некий cache