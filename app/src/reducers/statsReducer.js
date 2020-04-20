const initialState = {
    data: "",
    isFetching: false,
    error: ""
}
// console.log("Initial State: ", initialState)

export const statsReducer = (state = initialState, action) => {
    switch (action.type){
        case "FETCH_SEASONS_START":
            console.log("State in reducer: ", state)
            return {
                ...state,
                isFetching: true
            };
        case "FETCH_SEASONS_SUCCESS":
            return {
                ...state,
                isFetching: false,
                data: action.payload,
                error: ""
            };
        case "FETCH_SEASONS_FAILURE":
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };


        case "FETCH_X_START":
            return {
                ...state,
                isFetching: true
            };
            case "FETCH_X_SUCCESS":
                return {
                    ...state,
                    isFetching: false,
                    x: action.payload,
                    error: ""
                };
            case "FETCH_X_FAILURE":
                return {
                    ...state,
                    isFetching: false,
                    error: action.payload
                };

                
        default:
            return state;
    }
}