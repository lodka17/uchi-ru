import { makeAutoObservable } from "mobx";
import { Auth, Register } from "../../api/user/UserAPI.types";
import { UserAPI } from "../../api/user/UserAPI";
import { User } from "./AuthStore.types";

const api = new UserAPI();

class AuthStore {
  isAuth: boolean = false;
  user: User = null;

  constructor() {
    makeAutoObservable(this);
  }

  register = async (userData: Register.Payload) => {
    try {
      await api.register(userData);
    } catch (error) {
      this.isAuth = false;
    }
  };

  auth = async (userData: Auth.Payload) => {
    try {
      const user = await api.auth(userData);
      this.user = user;
      this.isAuth = true;
    } catch (error) {
      this.isAuth = false;
    }
  };
}

export const userStore = new AuthStore();
