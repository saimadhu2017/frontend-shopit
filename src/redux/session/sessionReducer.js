import sessionTypes from "./sessionTypes";

const defaultState = {
    isUserSignedin: false
}

export const updateUserSignedIn = (state = defaultState, action) => {
    switch (action.type) {
        case sessionTypes.SIGNIN:
            return ({
                ...state,
                isUserSignedin: action.data.isUserSignedin
            })

        default:
            return (state)
    }
}