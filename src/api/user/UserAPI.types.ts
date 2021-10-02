import {IInstanceAPI} from "../API.types";

export interface IUserAPI extends IInstanceAPI {
    register: Register.Method
}

export namespace Register {
    export const endpoint = 'register'
    export type Method = (user: Register.Payload) => Promise<Response>
    export type Payload = {
        username: string,
        password: string,
        first_name: string,
        last_name: string,
        middle_name: string,
        email: string
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