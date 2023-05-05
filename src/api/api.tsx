import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {"API-KEY": "04feb261-a80c-4052-8671-12911595a77d"},
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})
export const userAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {return response.data})},
    unFollow(id: number) {
        return instance.delete(`follow/${id}`)
            .then(response => {return response.data})},
    follow(id: number) {
        return instance.post(`follow/${id}`)
            .then(response => {return response.data})}}
export const authAPI = {
    me() {return instance.get(`auth/me/`)}
}
export const profileAPI = {
    getProfile(userId: string) {return instance.get(`profile/` + userId)},
    getUserStatus(userId: string){return instance.get(`profile/status/`+ userId)},
    updateStatus(status:string){return instance.put(`profile/status/`, {status:status})}
}