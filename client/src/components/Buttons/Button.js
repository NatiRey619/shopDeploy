import React, { useState } from "react";
import "./Button.css"; //importing css from

//HOOK Always on top of component
const Button = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  // use state is condition for true fase
  const isFan = false;

  const toggleIsAdmin = () => {
    setIsAdmin(!isAdmin);
  };

  //js logic
  return (
    <div>
      <button onClick={toggleIsAdmin}>Am I am Admin?</button>
      <button disabled={isAdmin} onClick={() => alert("hello")}>
        You should be able to click this it only if you are Admin
      </button>

      {isAdmin && (
        <button onClick={() => console.log("helloooooooooo")}>
          Shows only when turn to admin
        </button>
      )}

      {isAdmin ? <p>NOT ADMIN</p> : <h1>Admin</h1>}

      <h1>this is termsOfAgreement page</h1>
    </div>
  );
};

export default Button;
