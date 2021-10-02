import {API} from "../API";
import {Auth, GetUser, GetUsersList, IAuthAPI, LoadAvatar} from "./AuthAPI.types";
import {Endpoint} from "../API.types";

export class AuthAPI extends API implements IAuthAPI {

    readonly endpoint: string;

    auth(user: Auth.Payload): Promise<Auth.Response> {
        return this.create<Auth.Payload, Auth.Response>(this.getEndpoint(this.endpoint, Auth.endpoint), user)
    }

    getAllUsers(): Promise<GetUsersList.Response> {
        return this.read<GetUsersList.Response>(this.getEndpoint(this.endpoint, Auth.endpoint))
    }

    getUser(id: Endpoint.Id): Promise<GetUser.Response> {
        return this.read<GetUser.Response>(this.getEndpoint(this.endpoint, Auth.endpoint, id))
    }

    loadAvatar(avatar: LoadAvatar.Payload): Promise<LoadAvatar.Response> {
        return this.create<LoadAvatar.Payload, LoadAvatar.Response>(this.getEndpoint(this.endpoint, Auth.endpoint), avatar)
    }

}
