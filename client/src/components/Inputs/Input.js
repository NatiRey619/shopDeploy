import { isValidInputTimeValue } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import { useRef } from "react";

const Input = () => {
  // const [name,setName] = useState('')
  // const [email,setEmail] = useState('')
  // const [age,setAge] = useState('')
  // const [hobby,setHobby] = useState('')
  const [formObj, setFormObj] = useState({});
  const inputEl = useRef(null);

  const submitForm = () => {
    // console.log({name, email, age, hobby})
    console.log(formObj);
  };
  // targeting input who we used ref on
  // and changing his background color to red
  const handleClick = () => {
    inputEl.current.focus();
    // after focusing we can literly change it
    inputEl.current.style.background = "red";
  };

  return (
    <div>
      <input
        ref={inputEl}
        type="text"
        placeholder="Enter your name"
        //   onChange={(event) =>  setName(event.target.value)}
        onChange={(event) =>
          setFormObj({ ...formObj, name: event.target.value })
        }
      />

      <input
        type="text"
        placeholder="Enter your email"
        //  onChange={(event) =>  setEmail(event.target.value)} />
        onChange={(event) =>
          setFormObj({ ...formObj, email: event.target.value })
        }
      />

      <input
        type="text"
        placeholder="Enter your Hobby"
        // onChange={(event) =>  setHobby(event.target.value)} />
        onChange={(event) =>
          setFormObj({ ...formObj, hobby: event.target.value })
        }
      />

      <input
        type="number"
        placeholder="Enter your age"
        //  onChange={(event) =>  setAge(event.target.value)} />
        onChange={(event) =>
          setFormObj({ ...formObj, age: event.target.value })
        }
      />

      <button onClick={submitForm}>Send form</button>

      <div
        style={{ height: "100px", width: "300px", border: "4px solid blue" }}
      ></div>
      <div
        style={{ height: "100px", width: "300px", border: "4px solid blue" }}
      ></div>
      <div
        style={{ height: "100px", width: "300px", border: "4px solid blue" }}
      ></div>
      <div
        style={{ height: "100px", width: "300px", border: "4px solid blue" }}
      ></div>
      <button onClick={handleClick}>Click me for focus</button>
    </div>
  );
};

export default Input;
