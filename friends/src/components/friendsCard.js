import React from "react";

const FriendCard = props => {
  return (
    <div style={{width: '30%', margin: '0 auto'}}>
      <h1>{props.name}</h1>
      <div>
        <p>Age:{props.age}</p>
        <p>Email: {props.email}</p>
      </div>
    </div>
  );
};

export default FriendCard;
