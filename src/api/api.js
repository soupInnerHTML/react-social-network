import Axios from 'axios';

const instance = Axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "dbc83807-4be5-41c4-91a2-bef228d6cac3"
    }
})

export const usersAPI = {
    getUsers(pageSize, currentPage) {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`)
            .then(Response => Response.data.items)
    },
    getProfile(getProfileIdFromUriParams) {
        return instance.get(`profile/${getProfileIdFromUriParams}`)
            .then(Response => Response.data)
    },
    getWhoAmI() {
        return instance.get(`auth/me`).then(Response => Response.data)
    },
    follow(id) {
        return instance.post(`follow/${id}`).then(Response => Response.data)
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`).then(Response => Response.data)
    }
}