import axios from "axios";

export const fetchStats = () => {
    return dispatch => {
        dispatch({type: "FETCH_STATS_START"});
        axios.get("http://stapi.co/api/v1/rest/season/search")
            .then(res => {
                console.log("Axios request: ", res)
                dispatch({type: "FETCH_STATS_SUCCESS", payload: res.data})
            })
            .catch(err => {
                console.log("Error: ", err.response)
                dispatch ({
                    type: "FETCH_STATS_FAILURE",
                    payload: `Error ${err.response.status}: ${err.response.data}`
                });
            });
    };
};