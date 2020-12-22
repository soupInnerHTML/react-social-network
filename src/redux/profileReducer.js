import { usersAPI, profileAPI, authAPI } from "../api/api"
import { v4 as getV4Id } from "uuid";
import swal from "sweetalert";

// actions
const ADD_POST = "profileReducer/addPost"
const LIKE_THE_POST = "profileReducer/likeThePost"
const UNLIKE_THE_POST = "profileReducer/unlikeThePost"
const SET_USER_PROFILE = "profileReducer/setUserProfile"
const NULL_PROFILE_DATA = "profileReducer/nullProfileData"
const ON_PROFILE_UNDEFINED = "profileReducer/onProfileundefined"
const SET_STATUS = "profileReducer/setStatus"
const SET_FOLLOW_STATE = "profileReducer/setFollowState"
const SAVE_AVATAR = "profileReducer/saveAvatar"

// action creators
export const addPost = input => ({
    type: ADD_POST,
    input,
})

export const likeThePost = postID => ({
    type: LIKE_THE_POST,
    postID,
})

export const unlikeThePost = postID => ({
    type: UNLIKE_THE_POST,
    postID,
})

export const setUserProfile = userProfile => ({
    type: SET_USER_PROFILE,
    userProfile,
})

export const nullProfileData = () => ({
    type: NULL_PROFILE_DATA,
})
export const onProfileUndefined = () => ({
    type: ON_PROFILE_UNDEFINED,
})

export const setStatus = (status) => ({
    type: SET_STATUS,
    status,
})

export const setFollowState = (followed) => ({
    type: SET_FOLLOW_STATE,
    followed,
})

export const saveAvatar = (photos) => ({
    type: SAVE_AVATAR,
    photos,
})

export const getProfileThunkCreator = (getProfileIdFromUriParams) => {
    return async dispatch => {

        if (getProfileIdFromUriParams) {
            try {
                let data = await profileAPI.getProfile(getProfileIdFromUriParams)
                let user = await usersAPI.getUserByTerm(data.fullName)
                dispatch(setUserProfile(data))
                dispatch(setFollowState(user.items[0].followed))
            }
            catch (e) {
                if (e.response && e.response.status === 400) {
                    await swal("Пользователь не найден", "", "error");
                    dispatch(onProfileUndefined())
                }
                else {
                    await swal(e, "", "error");
                    dispatch(onProfileUndefined())
                    // TODO fix
                }
            }
        }

        else {
            let me = await authAPI.getWhoAmI()
            let data = await profileAPI.getProfile(me.data.id)
            dispatch(setUserProfile(data))
        }
    }
}

export const getProfileTC = getProfileThunkCreator

export const getStatusThunkCreator = (id) => {
    return dispatch => {
        return profileAPI.getStatus(id).then(response => dispatch(setStatus(response)))
    }
}

export const updateStatusThunkCreator = (status) => {
    return dispatch => {
        dispatch(setStatus(status))
        profileAPI.updateStatus(status).catch(e => alert(e))
    }
}

export const saveAvatarTC = (avatar) => {
    return async dispatch => {
        let response = await profileAPI.setAvatar(avatar)
        if (response.resultCode === 0) {
            dispatch(saveAvatar(response.data.photos))
        }
    }
}

export const setProfileMetaTC = meta => {
    return async dispatch => {
        profileAPI.setProfileMeta(meta)
    }
}

let initialState = {
    postsData: [
        {
            id: 1,
            likes: 12,
            liked: false,
            postDate: [0, 11, 16],
            text: "Professionally transform ethical initiatives before synergistic synergy. Seamlessly build ethical paradigms through enterprise technologies. Completely coordinate economically sound synergy after open-source content. Enthusiastically underwhelm compelling services through low-risk high-yield e-commerce. Holisticly restore interactive processes rather than low-risk high-yield results.",
        },
        {
            id: 2,
            likes: 1,
            liked: false,
            postDate: [2020, 11, 12],
            text: "Professionally impact diverse growth strategies vis-a-vis low-risk high-yield convergence. Efficiently engineer proactive communities through maintainable infomediaries. Compellingly myocardinate business relationships and real-time ROI. Phosfluorescently engage backend content with premier expertise. Interactively evisculate ethical technologies without front-end ROI.            ",
        },
        {
            id: 3,
            likes: 3,
            liked: false,
            postDate: [2020, 11, 13],
            text: "Appropriately provide access to scalable \"outside the box\" thinking without resource maximizing users. Dynamically reinvent interactive innovation before progressive expertise. Energistically re-engineer competitive partnerships with prospective supply chains. Enthusiastically evisculate alternative functionalities without cost effective resources. Distinctively initiate quality networks via market-driven methodologies.            ",
        },
        {
            id: 4,
            liked: false,
            likes: 228,
            postDate: [2020, 11, 14],
            text: "Holisticly mesh excellent convergence after customized systems. Competently target multifunctional catalysts for change via multifunctional ROI. Seamlessly matrix unique.",
        },
        {
            id: 5,
            liked: false,
            likes: 1337,
            postDate: [2020, 11, 15],
            text: "Globally network optimal human capital with goal-oriented methods of empowerment. Professionally strategize economically sound leadership skills before leading-edge materials. Credibly enable turnkey meta-services after principle-centered communities. Objectively iterate vertical ideas via client-centered data. Quickly formulate world-class paradigms through resource maximizing supply chains.            ",
        },
        {
            id: 6,
            liked: false,
            likes: 1488,
            postDate: [2020, 11, 16],
            text: "Hello world",
        }
    ],
    profileData: [],
    isProfileUndefined: undefined,
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let { input, } = action
            if (input) {
                return {
                    ...state,
                    postsData: [...state.postsData, {
                        id: getV4Id(),
                        likes: 0,
                        postDate: new Date(),
                        liked: false,
                        text: input,
                    }],
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
            return { ...state, isProfileUndefined: true, }


        default:
            return state

    }

}

export default profileReducer