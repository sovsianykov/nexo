import { GET_FULL_LIST, GET_SMALL_LIST, POST_COMMENT } from "./types";

const initialState = {
  smallSize: [],
  isLoading: false,
  fullSize: [],
  comments: [{ id: 0, body: "" }],
};

const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SMALL_LIST:
      return {
        ...state,
        smallSize: action.payload,
        isLoading: true,
      };
    case GET_FULL_LIST:
      return {
        ...state,
        fullSize: action.payload,
      };

    case POST_COMMENT:
      return {
        ...state,
        comments: state.comments.concat([action.payload]),
      };
    default:
      return state;
  }
};
export default imageReducer;
