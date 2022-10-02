import React from "react";

const Card = ({ img, firstName, lastName, email }) => {
  return (
    <div className="card">
      <img src={img} alt="user-img" />
      <div className="user-info">
        <p className="name-text">
          {firstName} {lastName}
        </p>
        <p className="email-text">{email}</p>
      </div>
    </div>
  );
};

export default Card;
