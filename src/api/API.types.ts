type Method = (url: string, payload?: object, queryParams?: object) => Promise<any>

export interface MethodDescriptor extends PropertyDescriptor {
    value?: Method | undefined
}

export namespace Endpoint {
    export type Id = number
    export type Body = string
}

export interface IInstanceAPI {
    readonly endpoint: string
}
