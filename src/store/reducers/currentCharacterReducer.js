import {SET_CHARACTER} from '../actions'
import characterInfo from '../../info/characterInfo.json'

const IRONCLAD = "Ironclad"
const SILENT = "Silent"
const DEFECT = "Defect"
const WATCHER = "Watcher"

const {Ironclad, Defect} = characterInfo

const initalState = {
    currentCharacter: Ironclad
}

const setCharacter = character => {
    switch(character) {
        case IRONCLAD:
            return Ironclad
        case DEFECT:
            return Defect
        default: 
            return Ironclad
    }
}

export const currentCharacterReducer = (state=initalState, action) => {
    switch(action.type) {
        case SET_CHARACTER:
            return {
                ...state,
                currentCharacter: setCharacter(action.payload)
            }
        default: 
            return {
                ...state
            }
    }
}

