import React from "react"
import Dialog from "../components/Dialogs/DialogItem/Dialog/Dialog"
import _ from "../components/Dialogs/Messages/Messages.module.css"
import getKey from "lodash/uniqueId"
import cs from "classnames"
import socket from "../img/socket.jpg"
import { createSelector } from "reselect"

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
export const getFormComments = state => state.form.comments

export const maxCurrentPage = createSelector(getPageSize, getUsersQuantity, (pageSize, usersQuantity) => {
    return Math.ceil(usersQuantity / pageSize)
})

export const getMessagesObject = createSelector(getMessagesData, getAuthId, (messages, myId) => {
    return messages.map(messageData => {
        let { userId, message, photo, userName, } = messageData
        return (
            <div key={ getKey() }  className={ cs(_.message, userId === myId ? _.right : _.left) }>
                <a href={ "/profile/" + userId }>
                    <img className={ cs("avatar", _.small) } src={ photo || socket } />
                </a>
                <div className={ _.messageBody }>
                    <a href={ "/profile/" + userId } className={ cs(_.name, "accent") }>{ userName }</a>
                    <p className={ _.messageContent }>{ message }</p>
                </div>
            </div>
        )
    })
})

export const getDialogsObject = createSelector(getDialogsData, (dialogs) => {
    return dialogs.map(dialogsData => {
        return (
            <Dialog dialogState={ dialogsData } key={ dialogsData.id }></Dialog>
        )
    })
})

// селекторы нужны, чтобы:
// 1. Инкапсулировать логику. Например, как в maxCurrentPage()
// 2. Объединить одинаковый код из разных файлов в одну f(x) и вызывать ее там === не менять значение в каждом файле
// createSelector нужен, чтобы избежать частой перерисовки компонент из-за использования обычных селекторов, которые зависят от других селекторов, используя некий cache