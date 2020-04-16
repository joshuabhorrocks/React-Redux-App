import axios from "axios";

export const fetchSeasons = () => {
    return dispatch => {
        dispatch({type: "FETCH_SEASONS_START"});
        axios.get("http://stapi.co/api/v1/rest/season/search")
            .then(res => {
                console.log("Axios request: ", res)
                dispatch({type: "FETCH_SEASONS_SUCCESS", payload: res.data})
            })
            .catch(err => {
                console.log("Error: ", err.response)
                dispatch ({
                    type: "FETCH_SEASONS_FAILURE",
                    payload: `Error ${err.response.status}: ${err.response.data}`
                });
            });
    };
};

export const fetchEpisodes = () => {

}