export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE"
export const REMOVE_FROM_FAVOURITE ="REMOVE_FROM_FAVOURITE"

export function addToFavourite(jobAdvertisement) {
    return {
        type: ADD_TO_FAVOURITE,
        payload: jobAdvertisement
    }
}

    export function removeFromFavourite(jobAdvertisement) {
        return {
            type: REMOVE_FROM_FAVOURITE,
            payload: jobAdvertisement
        }
    }
