import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./store/todoSlice";

const InputBox = () => {
  const dispatch = useDispatch();

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const mobileRef = useRef(null);
  const inputRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      firstNameRef.current.value === "" ||
      lastNameRef.current.value === "" ||
      mobileRef.current.value === "" ||
      inputRef.current.value === ""
    ) {
      return;
    }
    const data = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      mobile: mobileRef.current.value,
      todo: inputRef.current.value,
    };
    dispatch(addTodo(data));
    firstNameRef.current.value = "";
    lastNameRef.current.value = "";
    mobileRef.current.value = "";
    inputRef.current.value = "";
  };
  return (
    <div className="md:flex flex-1">
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        className="p-3 w-full"
        ref={firstNameRef}
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        className="p-3 w-full"
        ref={lastNameRef}
      />
      <input
        type="number"
        name="mobile"
        className="p-3 w-full"
        placeholder="Mobile"
        maxLength={10}
        ref={mobileRef}
      />
      <input
        type="text"
        name="todo"
        placeholder="Todo"
        className="p-3 w-full"
        ref={inputRef}
      />
      <button className="p-2 bg-black text-white w-2/5" onClick={handleSubmit}>
        Add Todo
      </button>
    </div>
  );
};

export default InputBox;
