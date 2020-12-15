import { createSelector } from 'reselect'

export const getPageSize = (state) => {
    return state.users.pageSize
}
export const getUsersData = (state) => {
    return state.users.usersData
}
// TODO добавить super selectors maxCurrentPage, currentPage (?)