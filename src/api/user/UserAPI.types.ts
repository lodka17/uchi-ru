import {Endpoint, IInstanceAPI} from "../API.types";

export interface IUserAPI extends IInstanceAPI {
    register: Register.Method
}
export namespace Register {
    export const endpoint = 'register'
    export type Method = (user: Register.Payload) => Promise<Response>
    export type Payload = {
        "username": string,
        "password": string,
        "first_name": string,
        "last_name": string,
        "middle_name": string,
        "email": string,
        "role": string
    }
    export type Response = {
        id: number
        username: string
        first_name: string
        last_name: string
        middle_name: string
        email: string
        faculty: {
            id: number
            name: string
            score: number
        }
        avatar: null
        y_coin: number
    }
}

export namespace Auth {
    export const endpoint = 'auth'
    export type Method = (user: Payload) => Promise<Response>
    export type Payload = {
        username: string
        password: string
    }
    export type Response = {
        "token": string,
        "id": number,
        "username": string,
        "first_name": string,
        "last_name": string,
        "middle_name": string,
        "email": string,
        "faculty": {
            "id": number,
            "name": string,
            "score": number
        },
        "avatar": null,
        "y_coin": number,
        "faculty_count": number,
        "level": number,
        "exp_count": number,
        "birthday": null,
        "instagram": null,
        "role": null
    }
}

export namespace GetUsersList {
    export const endpoint = ''
    export type Method = () => Promise<Response>
    export type Response = User[]
    type User = {
        id: number,
        username: string,
        first_name: string,
        last_name: string,
        middle_name: string,
        email: string,
        faculty: {
            id: number,
            name: string,
            score: number
        },
        avatar: null,
        y_coin: number,
        faculty_count: number,
        level: number,
        exp_count: number
    }
}

export namespace GetUser {
    export const endpoint = ''
    export type Method = (id: Endpoint.Id) => Promise<Response>
    export type Response = User
}

export namespace LoadAvatar {
    export const endpoint = 'load_avatar'
    export type Method = (avatar: Payload) => Promise<Response>
    export type Payload = {
        avatar: ImageBitmap
    }
    export type Response = {
        "id": number,
        "username": string,
        "first_name": string,
        "last_name": string,
        "middle_name": string,
        "email": string,
        "faculty": {
            "id": number,
            "name": string,
            "score": number
        },
        "avatar": ImageBitmap,
        "y_coin": number,
        "faculty_count": number,
        "level": number,
        "exp_count": number
    }
}


type User = {
    id: number,
    username: string,
    first_name: string,
    last_name: string,
    middle_name: string,
    email: string,
    faculty: {
        id: number,
        name: string,
        score: number
    },
    avatar: null,
    y_coin: number,
    faculty_count: number,
    level: number,
    exp_count: number
}