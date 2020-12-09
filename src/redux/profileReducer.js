import { usersAPI, profileAPI } from '../api/api'
import { v4 as getV4Id } from 'uuid';

// actions
const ADD_POST = 'addPost'
const LIKE_THE_POST = 'likeOnThePost'
const UNLIKE_THE_POST = 'unlikeThePost'
const SET_USER_PROFILE = 'setUserProfile'
const FETCHING = 'fetchingProfile'
const FETCHED = 'fetchedProfile'
const NULL_PROFILE_DATA = 'nullProfileData'
const ON_PROFILE_UNDEFINED = 'onProfileundefined'
const SET_STATUS = 'setStatus'
const SET_FOLLOW_STATE = 'setFollowState'

// action creators
export const addPost = input => ({
    type: ADD_POST,
    input
})

export const likeThePost = postID => ({
    type: LIKE_THE_POST,
    postID
})

export const unlikeThePost = postID => ({
    type: UNLIKE_THE_POST,
    postID
})

export const setUserProfile = userProfile => ({
    type: SET_USER_PROFILE,
    userProfile
})

export const fetching = () => ({
    type: FETCHING,
})

export const fetched = () => ({
    type: FETCHED,
})

export const nullProfileData = () => ({
    type: NULL_PROFILE_DATA,
})
export const onProfileUndefined = () => ({
    type: ON_PROFILE_UNDEFINED,
})

export const setStatus = (status) => ({
    type: SET_STATUS,
    status
})

export const setFollowState = (followed) => ({
    type: SET_FOLLOW_STATE,
    followed
})

export const getProfileThunkCreator = (getProfileIdFromUriParams) => {
    return dispatch => {
        dispatch(fetching())

        if (getProfileIdFromUriParams) {
            profileAPI.getProfile(getProfileIdFromUriParams).then(data => {
                usersAPI.getUserByTerm(data.fullName).then(user => {
                    dispatch(fetched())
                    dispatch(setUserProfile(data))
                    dispatch(setFollowState(user.items[0].followed))
                })
            })
                .catch(e => {
                    if (e.response && e.response.status === 400) {
                        alert('Пользователь не найден')
                        dispatch(onProfileUndefined())
                    }
                    else {
                        alert(e)
                        console.error(e)
                        dispatch(fetched())
                    }
                })
        }

        else {
            usersAPI.getWhoAmI().then(Me => {
                profileAPI.getProfile(Me.data.id).then(data => {
                    dispatch(fetched())
                    dispatch(setUserProfile(data))
                })
            })
        }


    }
}

export const getStatusThunkCreator = (id) => {
    return dispatch => {
        profileAPI.getStatus(id).then(response => dispatch(setStatus(response)))
    }
}

export const updateStatusThunkCreator = (status) => {
    return dispatch => {
        dispatch(setStatus(status))
        profileAPI.updateStatus(status).catch(e => alert(e))
    }
}

let initialState = {
    postsData: [
        {
            id: 1,
            likes: 12,
            liked: false,
            postDate: [2000, 9, 31],
            text: 'Professionally transform ethical initiatives before synergistic synergy. Seamlessly build ethical paradigms through enterprise technologies. Completely coordinate economically sound synergy after open-source content. Enthusiastically underwhelm compelling services through low-risk high-yield e-commerce. Holisticly restore interactive processes rather than low-risk high-yield results.'
        },
        {
            id: 2,
            likes: 1,
            liked: false,
            postDate: [2000, 9, 31],
            text: 'Professionally impact diverse growth strategies vis-a-vis low-risk high-yield convergence. Efficiently engineer proactive communities through maintainable infomediaries. Compellingly myocardinate business relationships and real-time ROI. Phosfluorescently engage backend content with premier expertise. Interactively evisculate ethical technologies without front-end ROI.            '
        },
        {
            id: 3,
            likes: 3,
            liked: false,
            postDate: [2000, 9, 31],
            text: 'Appropriately provide access to scalable "outside the box" thinking without resource maximizing users. Dynamically reinvent interactive innovation before progressive expertise. Energistically re-engineer competitive partnerships with prospective supply chains. Enthusiastically evisculate alternative functionalities without cost effective resources. Distinctively initiate quality networks via market-driven methodologies.            '
        },
        {
            id: 4,
            liked: false,
            likes: 228,
            postDate: [2009, 9, 31],
            text: 'Holisticly mesh excellent convergence after customized systems. Competently target multifunctional catalysts for change via multifunctional ROI. Seamlessly matrix unique.'
        },
        {
            id: 5,
            liked: false,
            likes: 1337,
            postDate: [2011, 9, 31],
            text: 'Globally network optimal human capital with goal-oriented methods of empowerment. Professionally strategize economically sound leadership skills before leading-edge materials. Credibly enable turnkey meta-services after principle-centered communities. Objectively iterate vertical ideas via client-centered data. Quickly formulate world-class paradigms through resource maximizing supply chains.            '
        },
        {
            id: 6,
            liked: false,
            likes: 1488,
            postDate: [2011, 9, 31],
            text: 'Hello world'
        }
    ],
    profileData: [],
    isFetching: true,
    isProfileUndefined: undefined
}

const profileReducer = (state = initialState, action) => {
    // let copyState = JSON.parse(JSON.stringify(state))

    switch (action.type) {
        case ADD_POST:
            let { input } = action
            if (input) {
                return {
                    ...state,
                    postsData: [...state.postsData, {
                        id: getV4Id(),
                        likes: 0,
                        postDate: new Date(),
                        liked: false,
                        text: input
                    }]
                }
            }
            else return state


        case LIKE_THE_POST:
            return {
                ...state, postsData: [...state.postsData].map(postData => {
                    if (postData.id === action.postID) {
                        return { ...postData, likes: postData.likes + 1, liked: true }
                    }
                    else {
                        return postData
                    }
                })
            }


        case UNLIKE_THE_POST:
            return {
                ...state, postsData: [...state.postsData].map(postData => {
                    if (postData.id === action.postID) {
                        return { ...postData, likes: postData.likes - 1, liked: false }
                    }
                    else {
                        return postData
                    }
                })
            }


        case SET_USER_PROFILE:
            return {
                ...state, profileData: action.userProfile
            }


        case FETCHING:
            return { ...state, isFetching: true }


        case FETCHED:
            return { ...state, isFetching: false }


        case NULL_PROFILE_DATA:
            return { ...state, profileData: [] }


        case SET_STATUS:
            return { ...state, status: action.status }


        case SET_FOLLOW_STATE:
            return {
                ...state, profileData: { ...state.profileData, followed: action.followed }
            }


        case ON_PROFILE_UNDEFINED:
            return { ...state, isProfileUndefined: true }


        default:
            return state

    }

}

export default profileReducer