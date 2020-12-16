import React from "react";
import visitor from "../../../images/visitor.jpg";

const SearchCard = () => {
  return (
    <div className="row p-4">
      <div className="col-md-3">
        <img className="img-fluid" src={visitor} alt="" />
      </div>
      <div className="col-md-6">
        <div className="row">
          <div className="col">
            <h4>Sufia Begum</h4>
            <p>SF123456</p>
          </div>
        </div>
        <div className="row d-flex justify-content-start">
          <div className="col-md-6">
            <p className="small">21 Years , 5'5"</p>
            <p className="small">Muslim</p>
            <p className="small">Paris,France</p>
          </div>
          <div className="col-md-6">
            <p className="small">B.E./B.Tech</p>
            <p className="small">Software Engineer</p>
            <p className="small">Never Married</p>
          </div>
        </div>
      </div>
      <div className="col-md-3 d-flex align-items-center">
        <button className="btn premium-btn">Send Request</button>
      </div>
    </div>
  );
};

export default SearchCard;
