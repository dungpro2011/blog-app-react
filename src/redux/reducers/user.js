import { INIT_STATE } from "../../constant";
import { getType, login, register } from "../actions";


export default function userReducers(state = INIT_STATE.user, action) {
    switch (action.type) {
        case getType(login.loginRequest):
            return {
                ...state,
                isLogin: false,
            };

        case getType(login.loginSuccess):
            if(action.payload[0] === 'Login_Success') {
                return {
                    ...state,
                    isLogin: true,
                    data: action.payload[1],
                };
            } else {
                return {
                    ...state,
                    isLogin: false,
                    data: []
                };
            }
            
        case getType(login.loginFailure):
            return {
                ...state,
                isLogin: false,
            };
        default:
            return state;
    }
};