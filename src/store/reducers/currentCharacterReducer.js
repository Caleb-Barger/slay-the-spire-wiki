import {SET_CHARACTER} from '../actions'

const initalState = {
    currentCharacter: null
}

const currentCharacterReducer = (state=initalState, action) => {
    switch(action.type) {
        case SET_CHARACTER:
            return {
                ...state,
                currentCharacter: action.payload
            }
        default: 
            return {
                ...state
            }
    }
}

export default currentCharacterReducer