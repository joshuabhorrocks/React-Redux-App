import React, {useEffect} from "react";
import {connect} from "react-redux";
import Loader from "react-loader-spinner";

import TrekStat from "../components/TrekStat"
import {fetchStats} from "../actions/statsActions";

const TrekStats = props => {
    useEffect(() => {
        props.fetchStats();
        // console.log("Fetch Stats: ", props.fetchStats())
    }, [])
    return (
        <div>
            <h2>Trek Stats</h2>
            <h3>Click a button below for Star Trek Stats</h3>
            {props.isFetching && (
            <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                //timeout={3000} //optional end
            />
            )}
            {console.log("Data props: ", props.data)}
            <button onClick={props.fetchStats}>Fetch Stats</button>
            <TrekStat />
            {props.error && <p className="error">{props.error}</p>}
        </div>
    )
};

const mapStateToProps = state => {
    console.log("State to Props: ", state);
    return {
        data: state.dataReducer,
        isFetching: state.dataReducer.isFetching,
        error: state.dataReducer.error
    };
};

export default connect(mapStateToProps, {fetchStats})(TrekStats)
