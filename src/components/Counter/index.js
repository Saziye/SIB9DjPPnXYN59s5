import React from "react";

const Counter = (props) => {
  const value =
     props.value;
  return (
    <div className="card mr-0 custom-card">
      <div className="card-body">
        <h6 className="card-title mb-4 col-xs-offset-5">{props.header} </h6>

        <h2 className="mb-1 text-primary col-xs-offset-5">{value}</h2>
        
        <div className="row col-xs-offset-5">
            <div className="col-6 text-center help-block btn btn-success" onClick={props.more}>+</div>
            <div className="col-6 text-center help-block btn btn-warning" onClick={props.less}>-</div>
        </div>
      </div>
    </div>
  );
};

export default Counter;