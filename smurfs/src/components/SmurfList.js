import React from "react";

import Smurf from "./Smurf";

const SmurfList = props => {
  console.log("props", props);

  return (
    <ul>
      {props.smurfs.map(smurf => {
        return <Smurf key={smurf.name} smurf={smurf} />;
      })}
    </ul>
  );
};

export default SmurfList;
