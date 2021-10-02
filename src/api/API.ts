import axios, {AxiosInstance} from 'axios'
import {Endpoint, MethodDescriptor} from "./API.types";

const method = (target: Object, method: string, descriptor: MethodDescriptor): void => {
    const originalMethod = descriptor.value
    descriptor.value = async function (...args) {
        try {
            const returnValue = await originalMethod!.apply(this, args)
            return returnValue.data
        } catch (error) {
            console.warn(error)
            return null
        }
    }
}


export class API {

    public readonly _baseUrl: string = process.env.REACT_APP_API_BASE_URL ?? 'http://130.193.56.51:8080'
    get baseUrl() {
        return this._baseUrl
    }

    public _httpClient: AxiosInstance
    get httpClient() {
        return this._httpClient
    }
    set httpClient(client: AxiosInstance) {
        this._httpClient = client
    }

    constructor() {
        this.httpClient = axios.create({
            baseURL: this.baseUrl,
            headers: {}
        })
    }

    @method
    protected async read<R>(url: string, queryParams?: object): Promise<R> {
        return await this.httpClient.get<never, R>(url, {
            params: queryParams ?? {}
        })
    }

    @method
    protected async create<P, R>(url: string, payload?: P, queryParams?: object): Promise<R> {
        return await this.httpClient.post<P, R>(url, payload, {
            params: queryParams ?? {}
        })
    }

    @method
    protected async update<P, R>(url: string, payload?: P, queryParams?: object): Promise<R> {
        return await this.httpClient.put<P, R>(url, payload, {
            params: queryParams ?? {}
        })
    }

    @method
    protected async delete<R>(url: string, queryParams?: object): Promise<R> {
        return await this.httpClient.delete<never, R>(url, {
            params: queryParams ?? {}
        })
    }

    protected getEndpoint(serviceEndpoint: string, methodEndpoint: string, id?: Endpoint.Id): Endpoint.Body {
        return !!id
            ? `/${serviceEndpoint}/${methodEndpoint}/${id}/`
            : `/${serviceEndpoint}/${methodEndpoint}/`
    }

}