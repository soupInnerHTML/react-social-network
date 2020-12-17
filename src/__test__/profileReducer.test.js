import React from "react"
import profileReducer from "../redux/profileReducer"

let state = {
    postsData: [
        {
            id: 1,
            likes: 12,
            liked: false,
            postDate: [2000, 9, 31],
            text: "Professionally transform ethical initiatives before synergistic synergy. Seamlessly build ethical paradigms through enterprise technologies. Completely coordinate economically sound synergy after open-source content. Enthusiastically underwhelm compelling services through low-risk high-yield e-commerce. Holisticly restore interactive processes rather than low-risk high-yield results.",
        },
        {
            id: 2,
            likes: 1,
            liked: false,
            postDate: [2000, 9, 31],
            text: "Professionally impact diverse growth strategies vis-a-vis low-risk high-yield convergence. Efficiently engineer proactive communities through maintainable infomediaries. Compellingly myocardinate business relationships and real-time ROI. Phosfluorescently engage backend content with premier expertise. Interactively evisculate ethical technologies without front-end ROI.            ",
        },
        {
            id: 3,
            likes: 3,
            liked: false,
            postDate: [2000, 9, 31],
            text: "Appropriately provide access to scalable \"outside the box\" thinking without resource maximizing users. Dynamically reinvent interactive innovation before progressive expertise. Energistically re-engineer competitive partnerships with prospective supply chains. Enthusiastically evisculate alternative functionalities without cost effective resources. Distinctively initiate quality networks via market-driven methodologies.            ",
        },
        {
            id: 4,
            liked: false,
            likes: 228,
            postDate: [2009, 9, 31],
            text: "Holisticly mesh excellent convergence after customized systems. Competently target multifunctional catalysts for change via multifunctional ROI. Seamlessly matrix unique.",
        },
        {
            id: 5,
            liked: false,
            likes: 1337,
            postDate: [2011, 9, 31],
            text: "Globally network optimal human capital with goal-oriented methods of empowerment. Professionally strategize economically sound leadership skills before leading-edge materials. Credibly enable turnkey meta-services after principle-centered communities. Objectively iterate vertical ideas via client-centered data. Quickly formulate world-class paradigms through resource maximizing supply chains.            ",
        },
        {
            id: 6,
            liked: false,
            likes: 1488,
            postDate: [2011, 9, 31],
            text: "Hello world",
        }
    ],
}

it("post must be deleted", () => {
    let action = deletePost(2)

    let newState = profileReducer(state, action)

    expect(newState.postsData.length).toBe(5)
})