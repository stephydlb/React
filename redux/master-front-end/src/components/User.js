import React from "react";
import { useSelector } from "react-redux";

const User = () => {
  const user = useSelector((state) => state.userReducer);
  console.log(user);
  return (
    <div className="user-container">
      <div className="user">
        <h3>{user.Pseudo}</h3>
        <img src="./img/bill-gates.png" alt="bill gates" />
        <p>Age: {user.Age}</p>
        <p>Like : {user.Like}</p>
      </div>
    </div>
  );
};

export default User;


