import {combineReducers} from "redux";

const setState = (state = {}, action) => {
    switch (action.type) {
        case 'contentScroll':
            return {...action}
        default:
            return state
    }
}

const pageAction = combineReducers({
    setState,
})

export default pageAction
