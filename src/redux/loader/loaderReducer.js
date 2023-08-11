import loaderTypes from "./loaderTypes";

const defaultShowLoaderState = {
    showLoader: false,
    showTransparentPageLoad: true // **Important note please send boolean value always for this key if not it will be undefined**
}

export const updateShowLoader = (state = defaultShowLoaderState, action) => {
    switch (action.type) {
        case loaderTypes.API_LOAD:
            return ({
                ...state,
                showLoader: action.data.showLoader,
                showTransparentPageLoad: action.data.showTransparentPageLoad
            })

        default:
            return (state)
    }
}