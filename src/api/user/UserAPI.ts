import {API} from "../API";
import {IUserAPI, Register} from "./UserAPI.types";

export class UserAPI extends API implements IUserAPI {

    readonly endpoint: string = 'user';

    register(user: Register.Payload): Promise<Register.Response> {
        return this.create(this.getEndpoint(this.endpoint, Register.endpoint), user)
    }

}