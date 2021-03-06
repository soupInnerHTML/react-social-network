import { usersAPI, profileAPI, authAPI } from "../api/api"
import { stopSubmit } from "redux-form";
import getId from "lodash/uniqueId";

//types
//TODO identify id type from global state | api
type postType = {
    id: string | number
    likes: number
    liked: boolean
    postDate: Array<number> //array of year, mounth & day
    comments: Array<commentType>
    text: string
}
type commentType = {
    id: string | number
    text: string
    date: Array<number>
}
type addPostActionType = {
    type: typeof ADD_POST
    input: string
}
type addCommentActionType = {
    type: typeof ADD_COMMENT
    text: string
    id: string | number
}
type likeThePostActionType = {
    type: typeof LIKE_THE_POST
    postID: string | number
}
type unlikeThePostActionType = {
    type: typeof UNLIKE_THE_POST
    postID: string | number
}
type setUserProfileActionType =  {
    type: typeof SET_USER_PROFILE,
    userProfile: object,
}
type nullProfileDataActionType =  {
    type: typeof NULL_PROFILE_DATA,
}
type onProfileUndefinedActionType = {
    type: typeof ON_PROFILE_UNDEFINED
    flag: boolean
}
type setStatusActionType = {
    type: typeof SET_STATUS
    status: string
}
type setFollowStateActionType = {
    type: typeof SET_FOLLOW_STATE
    followed: boolean
}
type saveAvatarActionType = {
    type: typeof SAVE_AVATAR
    photos: object
}

// actions
const ADD_POST = "profileReducer/addPost"
const ADD_COMMENT = "profileReducer/addComment"
const LIKE_THE_POST = "profileReducer/likeThePost"
const UNLIKE_THE_POST = "profileReducer/unlikeThePost"
const SET_USER_PROFILE = "profileReducer/setUserProfile"
const NULL_PROFILE_DATA = "profileReducer/nullProfileData"
const ON_PROFILE_UNDEFINED = "profileReducer/onProfileundefined"
const SET_STATUS = "profileReducer/setStatus"
const SET_FOLLOW_STATE = "profileReducer/setFollowState"
const SAVE_AVATAR = "profileReducer/saveAvatar"

// action creators
export const addPost = (input: string): addPostActionType => ({
    type: ADD_POST,
    input,
})

export const addComment = (text: string, id: string | number): addCommentActionType => ({
    type: ADD_COMMENT,
    text,
    id,
})

export const likeThePost = (postID: string | number): likeThePostActionType => ({
    type: LIKE_THE_POST,
    postID,
})

export const unlikeThePost = (postID: string | number): unlikeThePostActionType => ({
    type: UNLIKE_THE_POST,
    postID,
})

export const setUserProfile = (userProfile: object): setUserProfileActionType => ({
    type: SET_USER_PROFILE,
    userProfile,
})

export const nullProfileData = (): nullProfileDataActionType => ({
    type: NULL_PROFILE_DATA,
})

export const onProfileUndefined = (flag = true): onProfileUndefinedActionType => ({
    type: ON_PROFILE_UNDEFINED,
    flag,
})

export const setStatus = (status: string): setStatusActionType => ({
    type: SET_STATUS,
    status,
})

export const setFollowState = (followed: boolean): setFollowStateActionType => ({
    type: SET_FOLLOW_STATE,
    followed,
})

export const saveAvatar = (photos: object): saveAvatarActionType => ({
    type: SAVE_AVATAR,
    photos,
})

export const getProfileThunkCreator = (getProfileIdFromUriParams: string | number) => {
    return async (dispatch: any) => {

        if (getProfileIdFromUriParams) {
            (async () => {
                let data = await profileAPI.getProfile(getProfileIdFromUriParams)
                let user = await usersAPI.getUserByTerm(data.fullName)
                dispatch(setUserProfile(data))
                dispatch(setFollowState(user.items[0].followed))
            })()
                .catch(e => {
                    if (e.response && e.response.status === 400) {
                        dispatch(onProfileUndefined())
                    }
                    else {
                        dispatch(onProfileUndefined())
                    }
                })
        }

        else {
            let me = await authAPI.getWhoAmI()
            let data = await profileAPI.getProfile(me.data.id)
            dispatch(setUserProfile(data))
        }
    }
}

export const getProfileTC = getProfileThunkCreator

export const getStatusThunkCreator = (id: string | number) => {
    return (dispatch: any) => {
        return profileAPI.getStatus(id).then(response => dispatch(setStatus(response)))
    }
}

export const updateStatusThunkCreator = (status: string) => {
    return (dispatch: any) => {
        dispatch(setStatus(status))
        profileAPI.updateStatus(status)
    }
}

export const saveAvatarTC = (avatar: string) => {
    return async (dispatch: any) => {
        let response = await profileAPI.setAvatar(avatar)
        if (response.resultCode === 0) {
            dispatch(saveAvatar(response.data.photos))
        }
    }
}

export const setProfileMetaTC = (meta: object) => {
    return (dispatch: any) => {
        return profileAPI.setProfileMeta(meta).then(response => {
            if (response.data.resultCode === 1) {
                let error = stopSubmit("profileSettings", { _error: response.data.messages[0], })
                dispatch(error)
            }
            return response.data
        })
    }
}

let initialState = {
    postsData: [
        {
            id: 1,
            likes: 12,
            liked: false,
            postDate: [0, 11, 16],
            comments: [
                {
                    id: 1,
                    text: "Hello world",
                    date: [2020, 11, 16],
                },
                {
                    id: 2,
                    text: "Hello world",
                    date: [2020, 11, 16],
                }

            ],
            text: "Professionally transform ethical initiatives before synergistic synergy. Seamlessly build ethical paradigms through enterprise technologies. Completely coordinate economically sound synergy after open-source content. Enthusiastically underwhelm compelling services through low-risk high-yield e-commerce. Holisticly restore interactive processes rather than low-risk high-yield results.",
        },
        {
            id: 2,
            likes: 1,
            liked: false,
            postDate: [2020, 11, 12],
            comments: [
                {
                    id: 3,
                    text: "Hello world",
                    date: [2020, 11, 16],
                },
                {
                    id: 4,
                    text: "Hello world",
                    date: [2020, 11, 16],
                }

            ],
            text: "Professionally impact diverse growth strategies vis-a-vis low-risk high-yield convergence. Efficiently engineer proactive communities through maintainable infomediaries. Compellingly myocardinate business relationships and real-time ROI. Phosfluorescently engage backend content with premier expertise. Interactively evisculate ethical technologies without front-end ROI.            ",
        },
        {
            id: 3,
            likes: 3,
            liked: false,
            postDate: [2020, 11, 13],
            comments: [
                {
                    id: 5,
                    text: "Hello world",
                    date: [2020, 11, 16],
                },
                {
                    id: 6,
                    text: "Hello world",
                    date: [2020, 11, 16],
                }

            ],
            text: "Appropriately provide access to scalable \"outside the box\" thinking without resource maximizing users. Dynamically reinvent interactive innovation before progressive expertise. Energistically re-engineer competitive partnerships with prospective supply chains. Enthusiastically evisculate alternative functionalities without cost effective resources. Distinctively initiate quality networks via market-driven methodologies.            ",
        },
        {
            id: 4,
            liked: false,
            likes: 228,
            postDate: [2020, 11, 14],
            comments: [
                {
                    id: 7,
                    text: "Hello world",
                    date: [2020, 11, 16],
                },
                {
                    id: 8,
                    text: "Hello world",
                    date: [2020, 11, 16],
                }

            ],
            text: "Holisticly mesh excellent convergence after customized systems. Competently target multifunctional catalysts for change via multifunctional ROI. Seamlessly matrix unique.",
        },
        {
            id: 5,
            liked: false,
            likes: 1337,
            postDate: [2020, 11, 15],
            comments: [


            ],
            text: "Globally network optimal human capital with goal-oriented methods of empowerment. Professionally strategize economically sound leadership skills before leading-edge materials. Credibly enable turnkey meta-services after principle-centered communities. Objectively iterate vertical ideas via client-centered data. Quickly formulate world-class paradigms through resource maximizing supply chains.            ",
        },
        {
            id: 6,
            liked: false,
            likes: 1488,
            postDate: [2020, 11, 16],
            comments: [
                {
                    id: 11,
                    text: "Hello world",
                    date: [2020, 11, 16],
                },
                {
                    id: 12,
                    text: "Hello world",
                    date: [2020, 11, 16],
                }

            ],
            text: "Hello world",
        }
    ] as Array<postType>,
    profileData: [] as Array<object>,
    isProfileUndefined: undefined as undefined | boolean,
}

const profileReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_POST:
            let { input, } = action
            if (input) {
                return {
                    ...state,
                    postsData: [...state.postsData, {
                        id: getId(),
                        likes: 0,
                        postDate: new Date(),
                        liked: false,
                        text: input,
                    }],
                }
            }
            else return state

        case ADD_COMMENT:
            let { text, id, } = action

            if (text) {
                return {
                    ...state,
                    postsData: state.postsData.map(postData => {
                        if (postData.id === id) {
                            return {
                                ...postData,
                                comments: [
                                    ...postData.comments,
                                    {
                                        id: getId(),
                                        text,
                                        date: new Date(),
                                    }
                                ],
                            }
                        }

                        else {
                            return postData
                        }

                    }),
                }
            }

            else return state


        case LIKE_THE_POST:
            return {
                ...state, postsData: [...state.postsData].map(postData => {
                    if (postData.id === action.postID) {
                        return { ...postData, likes: postData.likes + 1, liked: true, }
                    }
                    else {
                        return postData
                    }
                }),
            }


        case UNLIKE_THE_POST:
            return {
                ...state, postsData: [...state.postsData].map(postData => {
                    if (postData.id === action.postID) {
                        return { ...postData, likes: postData.likes - 1, liked: false, }
                    }
                    else {
                        return postData
                    }
                }),
            }


        case SET_USER_PROFILE:
            return {
                ...state, profileData: action.userProfile,
            }

        case NULL_PROFILE_DATA:
            return { ...state, profileData: [], }


        case SET_STATUS:
            return { ...state, status: action.status, }


        case SET_FOLLOW_STATE:
            return {
                ...state, profileData: { ...state.profileData, followed: action.followed, },
            }

        case SAVE_AVATAR:
            return {
                ...state, profileData: {
                    ...state.profileData, photos: action.photos,
                },
            }


        case ON_PROFILE_UNDEFINED:
            return { ...state, isProfileUndefined: action.flag, }


        default:
            return state

    }

}

export default profileReducer