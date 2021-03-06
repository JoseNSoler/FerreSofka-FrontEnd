//reducers
import { combineReducers } from 'redux'

const initialState = {
    result: {},
    user:[],
    character:{},
    loading: false,
    idInv: 0,
    orderProducts: [],
    finalProducts: [],
    finalInvoice: {},
    users: []
};


function allForOne(state = initialState, action) {
    switch (action.type) {
        case "Loading": {
            return {
                ...state,
                loading: true,
                idInv: action.id
            }
        }
        case "createUser":{
            return{
                ...state,
                users: [...state.users, action.user]
            }
        }
        case "getUsers": {
            return {
                ...state,
                users: action.users
            }
        }
        case "modifyOrder":{
            return {
                ...state,
                orderProducts: action.products,
                loading: false
            }
        }
        case "makeInvoice":{
            return {
                ...state,
                finalProducts: state.finalProducts,
                finalInvoice: state.finalInvoice,
                loading: false
            }
        }
        case "All": {
            console.log("entramos a alll")
            return {...state, result: action.data, loading: false }
        }
        case "FilterRef": {
            return { ...state, result: action.data, idInv: action.id, loading: false}
        }
        case "FilterMany": {
            return { ...state, result: action.data}
        }
        case "Page": {
            return { ...state, result: action.data}
        }
        case "DelFav": {
            console.log(action.fav)
            return { ...state, user: state.user.filter( char => char !== action.fav )}
        }
        case "AddFav": {
            // (state.user.includes(action.fav) ? state.user.filter( char => char !== action.fav ) : [...state.user, action.fav])
            console.log(action.allFav)
            console.log("assdaasdasdsad")
        
            if(state.user === undefined) return { ...state, user: [action.fav]}
            if(state.user !== undefined) return  { ...state, user: (state.user.includes(action.fav) ? state.user.filter( char => char !== action.fav ) : [...state.user, action.fav]) }
   
        }



        default: return state
    }
}




const rootReducer = combineReducers({
    allForOne
})

export default rootReducer