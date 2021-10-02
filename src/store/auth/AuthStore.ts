import { makeAutoObservable } from "mobx";
import {Auth, Register} from "../../api/user/UserAPI.types";
import { UserAPI } from "../../api/user/UserAPI";
import {User} from "./AuthStore.types";

const api = new UserAPI();

class AuthStore {
  isAuth: boolean = false;
  user: User = null;

  constructor() {
    makeAutoObservable(this);
  }

  async register(userData: Register.Payload) {
    try {
      await api.register(userData);
    } catch (error) {
      console.log(error);
      this.isAuth = false
    }
  }

  async auth(userData: Auth.Payload) {
    try {
      const user = await api.auth(userData);
      this.user = user
      this.isAuth = true
    } catch (error) {
      console.log(error);
      this.isAuth = false
    }
  }

}

export const userStore = new AuthStore();