import { ADD_TO_FAVOURITE, REMOVE_FROM_FAVOURITE } from "../actions/favouriteActions";
import { favouriteItems } from "../initialValues/favouriteItems";

const initialState = {
    favouriteItems: favouriteItems,
}

export default function favouriteReducer(state = initialState, { type, payload }) {

    switch (type) {
        case ADD_TO_FAVOURITE:
            let jobAdvertisement = state.favouriteItems.find((c) => c.jobAdvertisement.jobAdvertisementId === payload.jobAdvertisementId)
            if (jobAdvertisement) {
                jobAdvertisement.quantity++;
                return {
                    ...state,
                };
            }
            else {
                return {
                    ...state,
                    favouriteItems: [...state.favouriteItems, {
                        quantitiy: 1
                        , jobAdvertisement: payload
                    }],
                    
                };
            }
        case REMOVE_FROM_FAVOURITE:
            return {
                ...state,
                favouriteItems: state.favouriteItems.filter((c) => c.jobAdvertisement.jobAdvertisementId !== payload.jobAdvertisementId),
            }
        default:
            return state;
    }
}
