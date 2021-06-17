import {GET_BIG_IMAGE, GET_FULL_LIST, GET_SMALL_LIST, POST_COMMENT} from "./types";


const initialState = {
    smallSize : [],
    isLoading : false,
    fullSize : [],
    comments : [],
    currentBigImage : []
}

const  imageReducer = (state = initialState, action ) => {
    switch (action.type) {
        case GET_SMALL_LIST :
            return {
                ...state,
                smallSize: action.payload,
                isLoading: true
            }
        case GET_FULL_LIST :
            return {
                ...state,
                fullSize: action.payload
            }
        case GET_BIG_IMAGE :
            return {
                ...state,
                currentBigImage: state.fullSize.filter(image => image.id === action.payload)
            }
        case POST_COMMENT :
            return {
                ...state,
                comments: action.payload

            }
        default :
            return state;

    }
}
export default imageReducer;