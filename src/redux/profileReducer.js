import { usersAPI } from '../api/api'

// actions
const ADD_POST = 'addPost'
const TYPE_TEXT = 'typeNewPostText'
const LIKE_THE_POST = 'likeOnThePost'
const UNLIKE_THE_POST = 'unlikeThePost'
const SET_USER_PROFILE = 'setUserProfile'
const FETCHING = 'fetchingProfile'
const FETCHED = 'fetchedProfile'
const NULL_PROFILE_DATA = 'nullProfileData'

// action creators
export const addPost = input => ({
    type: ADD_POST,
    input
})

export const typeNewPost = input => ({
    type: TYPE_TEXT,
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

export const getProfileThunkCreator = (getProfileIdFromUriParams) => {
    return dispatch => {
        dispatch(fetching())

        if (getProfileIdFromUriParams) {
            usersAPI.getProfile(getProfileIdFromUriParams).then(data => {
                dispatch(fetched())
                dispatch(setUserProfile(data))
            })
        }

        else {
            usersAPI.getWhoAmI().then(Me => {
                usersAPI.getProfile(Me.data.id).then(data => {
                    dispatch(fetched())
                    dispatch(setUserProfile(data))
                })
            })
        }


    }
}

let initialState = {
    postsData: [
        {
            id: 1,
            likes: 12,
            text: 'Professionally transform ethical initiatives before synergistic synergy. Seamlessly build ethical paradigms through enterprise technologies. Completely coordinate economically sound synergy after open-source content. Enthusiastically underwhelm compelling services through low-risk high-yield e-commerce. Holisticly restore interactive processes rather than low-risk high-yield results.'
        },
        {
            id: 2,
            likes: 1,
            text: 'Professionally impact diverse growth strategies vis-a-vis low-risk high-yield convergence. Efficiently engineer proactive communities through maintainable infomediaries. Compellingly myocardinate business relationships and real-time ROI. Phosfluorescently engage backend content with premier expertise. Interactively evisculate ethical technologies without front-end ROI.            '
        },
        {
            id: 3,
            likes: 3,
            text: 'Appropriately provide access to scalable "outside the box" thinking without resource maximizing users. Dynamically reinvent interactive innovation before progressive expertise. Energistically re-engineer competitive partnerships with prospective supply chains. Enthusiastically evisculate alternative functionalities without cost effective resources. Distinctively initiate quality networks via market-driven methodologies.            '
        },
        {
            id: 4,
            likes: 228,
            text: 'Holisticly mesh excellent convergence after customized systems. Competently target multifunctional catalysts for change via multifunctional ROI. Seamlessly matrix unique.'
        },
        {
            id: 5,
            likes: 1337,
            text: 'Globally network optimal human capital with goal-oriented methods of empowerment. Professionally strategize economically sound leadership skills before leading-edge materials. Credibly enable turnkey meta-services after principle-centered communities. Objectively iterate vertical ideas via client-centered data. Quickly formulate world-class paradigms through resource maximizing supply chains.            '
        },
        {
            id: 6,
            likes: 1488,
            text: 'Hello world'
        }
    ],
    profileData: [],
    newPostText: '',
    isFetching: true
}

const profileReducer = (state = initialState, action) => {
    // let copyState = JSON.parse(JSON.stringify(state))

    switch (action.type) {
        case ADD_POST: {
            if (action.input.length) {
                return {
                    ...state,
                    postsData: [...state.postsData, {
                        id: Math.round(Math.random() * 1000),
                        likes: 0,
                        text: action.input
                    }],
                    newPostText: ''
                }
            }
            else return state
        }

        case TYPE_TEXT: {
            return { ...state, newPostText: action.input }
        }

        case LIKE_THE_POST: {
            return {
                ...state, postsData: [...state.postsData].map(postData => {
                    if (postData.id === action.postID) {
                        return { ...postData, likes: postData.likes + 1 }
                    }
                    else {
                        return postData
                    }
                })
            }
        }

        case UNLIKE_THE_POST: {
            return {
                ...state, postsData: [...state.postsData].map(postData => {
                    if (postData.id === action.postID) {
                        return { ...postData, likes: postData.likes - 1 }
                    }
                    else {
                        return postData
                    }
                })
            }
        }

        case SET_USER_PROFILE: {
            return {
                ...state, profileData: action.userProfile
            }
        }

        case FETCHING: {
            return { ...state, isFetching: true }
        }

        case FETCHED: {
            return { ...state, isFetching: false }
        }

        case NULL_PROFILE_DATA: {
            return { ...state, profileData: [] }
        }

        default:
            return state

    }

}

export default profileReducer