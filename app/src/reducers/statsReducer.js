const initialState = {
    data: "",
    isFetching: false,
    error: ""
}
// console.log("Initial State: ", initialState)

export const statsReducer = (state = initialState, action) => {
    switch (action.type){
        case "FETCH_STATS_START":
            console.log("State in reducer: ", state)
            return {
                ...state,
                isFetching: true
            };
        case "FETCH_STATS_SUCCESS":
            return {
                ...state,
                isFetching: false,
                data: action.payload,
                error: ""
            };
        case "FETCH_STATS_FAILURE":
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        default:
            return state;
    }
}