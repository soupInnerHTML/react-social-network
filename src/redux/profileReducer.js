export const CREATE_ACTION_ADD_POST = input => ({
    type: 'addPost',
    input
})

export const CREATE_ACTION_TYPE_NEW_POST = input => ({
    type: 'typeText',
    input
})

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
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_ACTION_ADD_POST(null).type:
            if (action.input.current.value.length) {
                state.postsData.push({
                    id: 7,
                    likes: 0,
                    text: action.input.current.value
                })
            }
            action.input.current.value = null
            state.newPostText = action.input.current.value
            break;

        case CREATE_ACTION_TYPE_NEW_POST(null).type:
            state.newPostText = action.input.current.value
            break;
    }

    return Object.assign({}, state)
}

export default profileReducer