import sessionTypes from "./sessionTypes";

const defaultState = {
    isUserSignedin: false,
    cartQuantity: 0
}

export const updateUserSignedIn = (state = defaultState, action) => {
    switch (action.type) {
        case sessionTypes.SIGNIN:
            return ({
                ...state,
                isUserSignedin: action.data.isUserSignedin
            })
        case sessionTypes.UPDATE_CART_QUANTITY:
            return ({
                ...state,
                cartQuantity: action.data.cartQuantity
            })

        default:
            return (state)
    }
}