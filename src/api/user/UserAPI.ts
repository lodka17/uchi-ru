import {API} from "../API";
import {IUserAPI, Register} from "./UserAPI.types";
import {Auth, GetUser, GetUsersList, LoadAvatar} from "../user/UserAPI.types";
import {Endpoint} from "../API.types";

export class UserAPI extends API implements IUserAPI {

    readonly endpoint: string = 'user';

    register(user: Register.Payload): Promise<Register.Response> {
        return this.create(this.getEndpoint(this.endpoint, Register.endpoint), user)
    }

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