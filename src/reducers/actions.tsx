import { LoginResponse, LogoutResponse } from "../models/state";

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export interface LoginSucceededAction {
    type: typeof LOGIN;
    response?: LoginResponse;
}

export const loginSucceeded = (loginResponse: LoginResponse): LoginSucceededAction => {
    return {
        type: LOGIN,
        response: loginResponse,
    }
}

export type Actions = LoginSucceededAction;