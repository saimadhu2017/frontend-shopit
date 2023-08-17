import sessionTypes from "./sessionTypes";

export const updateUserSignInAction = (data) => {
    return ({
        type: sessionTypes.SIGNIN,
        data
    })
}

export const updateUserCartQuantityAction = (data) => {
    return ({
        type: sessionTypes.UPDATE_CART_QUANTITY,
        data
    })
}