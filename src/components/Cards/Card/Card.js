import React from "react";

const Card = (props) => {
  return (
    <div className="col-lg-4 p-5">
      <div className="text-center card-box">
        <div className="member-card pt-2 pb-2">
          <div className="thumb-lg member-thumb mx-auto">
            <img
              src={props.img}
              className="img-thumbnail"
              alt="cooperativaImage"
            />
          </div>
          <div>
            <h4>{props.name}</h4>
            <p className="text-muted">{props.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
