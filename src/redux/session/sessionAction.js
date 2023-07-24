import sessionTypes from "./sessionTypes";

export const updateUserSignInAction = (data) => {
    return ({
        type: sessionTypes.SIGNIN,
        data
    })
}