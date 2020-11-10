import profileReducer from './profileReducer'
import dialogsReducer from './dialogsReducer'

let store = {
    _state : {
        profilePage : {
            postsData : [
                {
                    id : 1,
                    likes : 12,
                    text: 'Professionally transform ethical initiatives before synergistic synergy. Seamlessly build ethical paradigms through enterprise technologies. Completely coordinate economically sound synergy after open-source content. Enthusiastically underwhelm compelling services through low-risk high-yield e-commerce. Holisticly restore interactive processes rather than low-risk high-yield results.'
                },
                {
                    id : 2,
                    likes : 1,
                    text: 'Professionally impact diverse growth strategies vis-a-vis low-risk high-yield convergence. Efficiently engineer proactive communities through maintainable infomediaries. Compellingly myocardinate business relationships and real-time ROI. Phosfluorescently engage backend content with premier expertise. Interactively evisculate ethical technologies without front-end ROI.            '
                },
                {
                    id : 3,
                    likes : 3,
                    text: 'Appropriately provide access to scalable "outside the box" thinking without resource maximizing users. Dynamically reinvent interactive innovation before progressive expertise. Energistically re-engineer competitive partnerships with prospective supply chains. Enthusiastically evisculate alternative functionalities without cost effective resources. Distinctively initiate quality networks via market-driven methodologies.            '
                },
                {
                    id : 4,
                    likes : 228,
                    text: 'Holisticly mesh excellent convergence after customized systems. Competently target multifunctional catalysts for change via multifunctional ROI. Seamlessly matrix unique.'
                },
                {
                    id : 5,
                    likes : 1337,
                    text: 'Globally network optimal human capital with goal-oriented methods of empowerment. Professionally strategize economically sound leadership skills before leading-edge materials. Credibly enable turnkey meta-services after principle-centered communities. Objectively iterate vertical ideas via client-centered data. Quickly formulate world-class paradigms through resource maximizing supply chains.            '
                },
                {
                    id : 6,
                    likes : 1488,
                    text: 'Hello world'
                }
            ],
            newPostText : '12'
        },
        dialogsPage : {
            messagesData : [
                {
                    id : 1,
                    message: 'Hello world'
                },
                {
                    id : 2,
                    message: 'Hello world'
                },
                {
                    id : 3,
                    message: 'Hello world'
                },
                {
                    id : 4,
                    message: 'Hello world'
                },
                {
                    id : 5,
                    message: 'Hello world'
                },
                {
                    id : 6,
                    message: 'Hello world'
                }
            ],
              
            dialogsData : [
            {
                id : 1,
                name : 'Andrey',
                avatar : 'https://sun9-28.userapi.com/impf/3oxrOXkAjBbvQImjNesMCeeoTZcqFteLDusJjA/yIjm5QpHquM.jpg?size=524x606&quality=96&proxy=1&sign=10d5805825dabf5b1b88fb1e008136bd'
            },
            {
                id : 2,
                name : 'Evgeniy',
                avatar : 'https://sun9-9.userapi.com/impf/Ecs7VcxhHxt0AiU3IJTe58QjXH0Fl7wDBWDoSA/AFnkh9I89gA.jpg?size=509x613&quality=96&proxy=1&sign=f5a058d9a66ca8eb1ca2f65c09e4aa6d'
            },
            {
                id : 3,
                name : 'Senya',
                avatar : 'https://sun9-45.userapi.com/impf/DCafG8McWw8qMr4ef4e6Fz114fSYoOquW_yfYQ/EYcl8y1IVxI.jpg?size=810x1080&quality=96&sign=959b56862b895207b84fae6b0d065131'
            }
            ]
        },
        friendsPage : {
            friendsData : [
                {
                    id : 1,
                    name : 'Andrey',
                    avatar : 'https://sun9-28.userapi.com/impf/3oxrOXkAjBbvQImjNesMCeeoTZcqFteLDusJjA/yIjm5QpHquM.jpg?size=524x606&quality=96&proxy=1&sign=10d5805825dabf5b1b88fb1e008136bd'
                },
                {
                    id : 2,
                    name : 'Evgeniy',
                    avatar : 'https://sun9-9.userapi.com/impf/Ecs7VcxhHxt0AiU3IJTe58QjXH0Fl7wDBWDoSA/AFnkh9I89gA.jpg?size=509x613&quality=96&proxy=1&sign=f5a058d9a66ca8eb1ca2f65c09e4aa6d'
                },
                {
                    id : 3,
                    name : 'Senya',
                    avatar : 'https://sun9-45.userapi.com/impf/DCafG8McWw8qMr4ef4e6Fz114fSYoOquW_yfYQ/EYcl8y1IVxI.jpg?size=810x1080&quality=96&sign=959b56862b895207b84fae6b0d065131'
                }
            ]
        }
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        // we don`t have a local function like the renderEntireTree from index.js
        // so we must add w/out import in this file
        // need to use for *
    },
    subcribe (observe) {
        this._callSubscriber = observe
        // get function from other file w/out import
        // we use it in index.js
        // kind of listener
        //this._callSubscriber = renderEntireTree from index.js
    },
    dispatch(action) {
        profileReducer(action, this._state)
        dialogsReducer(action, this._state)

        this._callSubscriber(this._state) //*
    }
}

window.store = store
export default store;