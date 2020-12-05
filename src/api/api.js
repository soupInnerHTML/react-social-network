import Axios from 'axios';

const samurai = Axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "dbc83807-4be5-41c4-91a2-bef228d6cac3"
    }
})

const vk = Axios.create({
    baseURL: "https://thingproxy.freeboard.io/fetch/https://api.vk.com/method/",
})
vk.defaults.params = {
    'access_token': '38399191eb22db9aaa580b66c286e38affbfa657cecdae3395bdb694be27aee1b24689f7124442c1f99c0',
    'v': '5.52'
};


export const usersAPI = {
    getUsers(pageSize, currentPage, isGetFriends = false) {
        return samurai.get(`users?count=${pageSize}&page=${currentPage}&friend=${isGetFriends ? isGetFriends : undefined}`)
            .then(Response => Response.data)
    },
    getProfile(getProfileIdFromUriParams) {
        return samurai.get(`profile/${getProfileIdFromUriParams}`)
            .then(Response => Response.data)
    },
    getWhoAmI() {
        return samurai.get(`auth/me`).then(Response => Response.data)
    },
    getAvatarByName(name) {
        return samurai.get(`users?term=${name}`).then(Response => Response.data)
    },
    follow(id) {
        return samurai.post(`follow/${id}`).then(Response => Response.data)
    },
    unfollow(id) {
        return samurai.delete(`follow/${id}`).then(Response => Response.data)
    },
    myVk() {
        return vk.get('users.get?user_ids=255462995')
    },
    getVkFriends() {
        return vk.get('friends.search?user_id=255462995&fields=photo_100')
    },
    getVkFollowers(count) {
        return vk.get('users.getFollowers?user_id=255462995&count=' + count)
    },
    banVkUser(id) {
        return vk.get('account.ban?owner_id=' + id)
    },
    getVkFeed() {
        return vk.get('newsfeed.get?filters=post,photo,photo_tag,wall_photo').then(Response => Response.data.response.items)
    }
}