import React from "react";
import "./ResultList.css";

//Result List component
function ResultList(props) {
  return (
    <div className="container__results">
      <h1 className="header-result">Here's Your Avatar</h1>
      <img src={props.results} alt="" className="img-result" />
    </div>
  );
}

export default ResultList;
