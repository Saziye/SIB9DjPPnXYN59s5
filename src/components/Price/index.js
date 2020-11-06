import React from "react";

const Price = (props) => {
  return (
    <div className="card mr-0 custom-card">
      {props.value !== JSON.stringify(undefined) && (
        <div className="card-body">
          <img
            src={props.src}
            alt={props.src}
            className="img-responsive float-right"
          />
          <h6 className="card-title mb-4 ">
            {`${props.value.description} (${props.value.code})`}{" "}
          </h6>
          <h2 className="mb-1 text-primary">{props.value.rate}</h2>
        </div>
      )}
    </div>
  );
};

export default Price;
