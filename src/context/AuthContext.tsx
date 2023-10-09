import { createContext, useReducer } from "react";
import { authReducer } from "./AuthReducer";

export interface AuthState {
    isLoggedIn: boolean;
    username?: string;
    favoriteIcon?: string
}

export const authInitialState:AuthState = {
    isLoggedIn: false,
    username: undefined,
    favoriteIcon: undefined
}

export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    changeFavoriteIcon: (IconName: string) => void;
}


export const AuthContext = createContext( {} as AuthContextProps);

export const AuthProvider = ({children}:any) => {

    const [authState, dispatch] = useReducer(authReducer, authInitialState)

    const signIn = ()=> {
        dispatch({type: 'signin'})
    }

    const changeFavoriteIcon = (IconName: string) => {
        dispatch({type:'changeFavIcon', payload:IconName})
    }

    return(
        <AuthContext.Provider value={{
            authState,
            signIn,
            changeFavoriteIcon
        }}>
            {children}
        </AuthContext.Provider>
    )
}