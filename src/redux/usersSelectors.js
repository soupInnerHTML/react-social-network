import React from "react"
import { createSelector } from "reselect"
import Dialog from "../components/Dialogs/DialogItem/Dialog/Dialog"
import _ from "../components/Dialogs/Messages/Messages.module.css"

export const getPageSize = state => state.users.pageSize
export const getUsersData = state => state.users.usersData
export const getUsersQuantity = state => state.users.usersQuantity
export const getCurrentPage = state => state.users.currentPage
export const getAuthId = state => state.auth.id
export const getIsNotAuth = state => state.auth.isNotAuth
export const getStatus = state => state.profile.status
export const getProfileData = state => state.profile.profileData
export const getPostsData = state => state.profile.postsData
export const getCaptcha = state => state.auth.captcha
export const getIsInitied = state => state.app.isInited
export const getIsNeedToHandle = state => state.app.isNeedToHandle
export const getFeedPage = state => state.feed
export const getUsersToChangeFollowState = state => state.users.usersToChangeFollowState
export const getLogin = state => state.auth.login
export const getAvatar = state => state.auth.avatar
export const getIsProfileUndefined = state => state.profile.isProfileUndefined
export const getProfileId = state => state.profile.profileData.userId
export const getIsFriends = state => state.users.isFriends
export const getFollowed = state => state.profile.profileData.followed
export const getMessagesData = state => state.dialogs.messagesData
export const getDialogsData = state => state.dialogs.dialogsData
export const getMyProfileData = state => state.auth.profile
export const getMyPhotos = state => state.auth.profile.photos
export const getMyName = state => state.auth.profile.fullName
export const getMyId = state => state.auth.profile.userId
export const getFormMessages = state => state.form.messages
// export const getSettingsIsSubmitted = state => state.form.profileSettings.submitSucceeded

export const maxCurrentPage = createSelector(getPageSize, getUsersQuantity, (pageSize, usersQuantity) => {
    return Math.ceil(usersQuantity / pageSize)
})

export const getMessagesObject = createSelector(getMessagesData, (messages) => {
    return messages.map(messageData => {
        let { id, from, message, } = messageData
        return <div key={id} className={from ? _.left : _.right}>{message}</div>
    })
})

export const getDialogsObject = createSelector(getDialogsData, (dialogs) => {
    return dialogs.map(dialogsData => {
        return (
            <Dialog dialogState={dialogsData} key={dialogsData.id}></Dialog>
        )
    })
})

// селекторы нужны, чтобы:
// 1. Инкапсулировать логику. Например, как в maxCurrentPage()
// 2. Объединить одинаковый код из разных файлов в одну f(x) и вызывать ее там === не менять значение в каждом файле
// createSelector нужен, чтобы избежать частой перерисовки компонент из-за использования обычных селекторов, которые зависят от других селекторов, используя некий cache