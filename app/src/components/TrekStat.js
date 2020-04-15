import React from "react";
import {connect} from "react-redux";

import TrekStats from "./TrekStats";

const TrekStat = props => {
    console.log("TS props: ", props.data)
    return (
        <div className="content">
          <h4>Data test</h4>
          {props.data.length ? (
            <ol type="1">
              {props.AdditionalFeatures.map(item => (
                <TrekStats key={item.uid} title={item} />
              ))}
            </ol>
          ) : (
            <p>Have some stats m8</p>
          )}
        </div>
    );
};

const mapStateToProps = state => {
    console.log("State to Props in TS: ", state);
    return {
        data: state.dataReducer.data
    }
}

export default connect(mapStateToProps)(TrekStat);