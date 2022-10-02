import React from "react";
import Card from "./Card";

const CardContainer = ({ users, loading }) => {
  return (
    <>
      {loading ? (
        <div className="loading">
          <p>Loading...</p>
        </div>
      ) : (
        <div className="card-container">
          {users.map((user) => {
            return (
              <Card
                key={user.id}
                img={user.avatar}
                firstName={user.first_name}
                lastName={user.last_name}
                email={user.email}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default CardContainer;
