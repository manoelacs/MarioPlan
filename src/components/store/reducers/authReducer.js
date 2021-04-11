

const initState = {
    authError: null,
}

const authReducer = (state = initState, action) => {
    switch(action.type){
        case 'LOGIN_ERROR':
            return{
                ...state, 
                authError: 'Login failed',
            }
        case 'LOGIN_SUCCESS':
            return{
                console.log('login success')
            }
        default:

    }

    return state

}; 

export default authReducer;