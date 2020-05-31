export const SET_CHARACTER = "SET_CHARACTER"

// character should be Ironclad, Silent, Defect, or Watcher NOTHING ELSE!!

export const setCharacter = character => {
    return {type: SET_CHARACTER, payload: character}
}