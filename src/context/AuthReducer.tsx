import { AuthState } from "./AuthContext";


type AuthAction = 
| {type: 'signin'}
| {type: 'logout'}
| {type: 'changeFavIcon', payload:string}
| {type: 'changeUserName', payload:string}


export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch(action.type){
        case 'signin':
            return{
                ...state,
                isLoggedIn:true,
                username: 'no-username-yet',
            }
        case 'changeFavIcon':
            return{
                ...state,
                favoriteIcon: action.payload
            }
        case 'logout':
            return{
                ...state,
                isLoggedIn:false,
                username: undefined,
            }
        case 'changeUserName':
            return{
                ...state,
                username: action.payload
            }    
        default:
            return state;        
    }
}