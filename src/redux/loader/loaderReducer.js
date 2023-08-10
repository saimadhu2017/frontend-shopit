import loaderTypes from "./loaderTypes";

const defaultState = {
    showLoader: false
}

export const updateShowLoader = (state = defaultState, action) => {
    switch (action.type) {
        case loaderTypes.API_LOAD:
            return ({
                ...state,
                showLoader: action.data.showLoader
            })

        default:
            return (state)
    }
}