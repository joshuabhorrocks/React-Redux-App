import React, {useEffect} from "react";
import {connect} from "react-redux";
import Loader from "react-loader-spinner";

import {fetchSeasons} from "../actions/statsActions";

const TrekStats = props => {
    useEffect(() => {
            props.fetchSeasons();
        // console.log("Fetch Stats: ", props.fetchSeasons())
    }, [])
    
    return (
        <div className="body">
            <h2 className="titleTwo">Star Trek Seasons and Episode Counts</h2>
            {/* <h3>Click the button below for a list of Star Trek seasons</h3>
            <button id="button" onClick={props.fetchStats}>Click for Seasons</button> */}
            <div className="data-return">
                {props.isFetching && (
                    <Loader
                    type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}
                    //timeout={3000} //optional end
                    />
                )}
                {props.error && <p className="error">{props.error}</p>}
                {console.log("Data props: ", props.data)}
                {props.data && props.data.map(item => (
                    <div className="data-card" key={item.uid}>
                    <h4 className="titles">{item.title}:</h4>
                    <p className="episodes">{item.numberOfEpisodes} Episodes</p>
                    </div>
                ))}
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    console.log("State to Props: ", state);
    return {
        data: state.dataReducer.data.seasons,
        isFetching: state.dataReducer.isFetching,
        error: state.dataReducer.error
    };
};

export default connect(mapStateToProps, {fetchSeasons})(TrekStats)





