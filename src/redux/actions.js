import { GET_SMALL_LIST } from "./types";


export function fetchSmall( ) {
    return  async dispatch =>
    {
        const response = await fetch('https://boiling-refuge-66454.herokuapp.com/images')
            .then(response => response.json())
        dispatch({type: GET_SMALL_LIST, payload : response})
        console.log(response)
    }
}