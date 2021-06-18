import { GET_FULL_LIST, GET_SMALL_LIST, POST_COMMENT } from "./types";
import axios from "axios";

export function fetchSmall() {
  return async (dispatch) => {
    const response = await axios
      .get("https://boiling-refuge-66454.herokuapp.com/images/")
      .then((response) => response.data)
      .catch((er) => console.log(er));
    dispatch({ type: GET_SMALL_LIST, payload: response });
  };
}
export function fetchFull() {
  return async (dispatch) => {
    const response = await axios
      .get("https://boiling-refuge-66454.herokuapp.com/images/")
      .then((response) => response.data)
      .catch((er) => console.log(er));
    dispatch({ type: GET_FULL_LIST, payload: response });
  };
}
export function postComment(comment) {
  return async (dispatch) => {
    await axios
      .post("https://boiling-refuge-66454.herokuapp.com/images/:imageId")
      .then((response) => response.data)
      .catch((er) => console.log(er));
    console.log(comment);
    dispatch({ type: POST_COMMENT, payload: comment });
  };
}
