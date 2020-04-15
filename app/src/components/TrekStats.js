import React, {useEffect} from "react";
import {connect} from "react-redux";
import Loader from "react-loader-spinner";

import {fetchStats} from "../actions/statsActions";

const TrekStats = props => {
    useEffect(() => {
        props.fetchStats();
        console.log("Fetch Stats: ", props.fetchStats())
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
            <button onClick={props.fetchStats}>Fetch Stats</button>
            {props.data && <h3>"{props.data}"</h3>}
            {props.error && <p className="error">{props.error}</p>}
        </div>
    )
};

const mapStateToProps = state => {
    console.log("State to Props: ", state.stats);
    return {
        data: state.stats.seasons,
        isFetching: state.stats.isFetching,
        error: state.stats.error
    };
};

export default connect(mapStateToProps, {fetchStats})(TrekStats)
