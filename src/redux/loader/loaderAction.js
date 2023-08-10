import loaderTypes from "./loaderTypes";

export const loadApiAction = (data) => {
    return ({
        type: loaderTypes.API_LOAD,
        data
    })
}