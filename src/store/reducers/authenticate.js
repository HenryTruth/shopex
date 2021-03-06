import * as actionTypes from '../actions/actionTypes'
import {updateObject} from '../utility'

const initialState = {
    token:localStorage.getItem('token'),
    userId: null,
    error:null,
    loading:false,
    authRedirectPath:"/",
    isSignup:true,
};


const authStart = (state, action) => {
    return updateObject(state, {error:null, loading:true});
}

const authSuccess = (state, action) => {
    // console.log(action.idToken,action.userId, action.signup)
    return updateObject(state, {
        token:action.idToken,
        userId:action.userId,
        isSignup:action.signup,
        error:null,
        loading:false
    })
}

const authFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        loading: false
    });
};

const authLogout = (state, action) => {
    return updateObject(state, { token: null, userId: null });
};

const setAuthRedirectPath = (state, action) => {
    return updateObject(state, { authRedirectPath: action.path })
}


const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.AUTH_START:
            return authStart(state, action);
        case actionTypes.AUTH_SUCCESS:
            return authSuccess(state, action)
        case actionTypes.AUTH_FAIL:
            return authFail(state, action)
        case actionTypes.AUTH_LOGOUT:
            return authLogout(state, action);
        case actionTypes.SET_AUTH_REDIRECT_PATH:
            return setAuthRedirectPath(state,action)
        default:
            return state
    }
}

export default reducer