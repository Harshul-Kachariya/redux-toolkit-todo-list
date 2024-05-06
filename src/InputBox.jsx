import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./store/todoSlice";
import { toast } from "react-toastify";

const InputBox = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const [uploadImage, setUploadImage] = useState();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    todo: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
      image: uploadImage,
    });
  };

  const handleImage = (e) => {
    setUploadImage(URL.createObjectURL(e.current.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data.firstName === "") {
      setError(true);
      return toast.error("First Name is reqired");
    } else if (data.lastName === "") {
      return toast.error("Last Name is reqired");
    } else if (data.mobile === "" && /^\d{10}$/.test(data.mobile)) {
      return toast.error("Mobile is reqired");
    } else if (data.todo === "") {
      return toast.error("Todo is reqired");
    } else {
      dispatch(addTodo(data));
      toast.success("Todo Added Successfully");
      setData({
        firstName: "",
        lastName: "",
        mobile: "",
        todo: "",
        image: "",
      });

      setError(false);
    }

    const isValid =
      data.firstName &&
      data.lastName &&
      data.mobile &&
      /^\d{10}$/.test(data.mobile) &&
      data.todo;

    if (!isValid) {
      setError(true);
      return toast.error("Filed can't be Empty!");
    }
  };

  return (
    <div className="md:flex-row flex flex-col p-3 gap-2">
      <input
        type="file"
        name="uploadImage"
        accept="image/*"
        placeholder="* Upload Image"
        className={`p-3 w-full border ${!!error ? "border-red-500" : ""}`}
        // ref={uploadImageRef}
        onChange={handleImage}
        value={data.image}
        required
        autoComplete="off"
      />
      <input
        type="text"
        name="firstName"
        placeholder="* First Name"
        className={`p-3 w-full border ${!!error ? "border-red-500" : ""}`}
        // ref={firstNameRef}
        onChange={handleChange}
        value={data.firstName}
        required
        autoComplete="off"
      />
      <input
        type="text"
        name="lastName"
        placeholder="* Last Name"
        className={`p-3 w-full border ${!!error ? "border-red-500" : ""}`}
        // ref={lastNameRef}
        onChange={handleChange}
        value={data.lastName}
        required
        autoComplete="off"
      />
      <input
        type="text"
        name="mobile"
        className={`p-3 w-full border ${!!error ? "border-red-500" : ""}`}
        placeholder="* Mobile"
        maxLength={10}
        // ref={mobileRef}
        onChange={handleChange}
        value={data.mobile}
        pattern="^\d{10}$"
        required
        autoComplete="off"
      />
      <input
        type="text"
        name="todo"
        placeholder="* Todo"
        className={`p-3 w-full border ${!!error ? "border-red-500" : ""}`}
        // ref={todoRef}
        onChange={handleChange}
        value={data.todo}
        required
        autoComplete="off"
      />
      <button
        className="p-2 bg-black text-white md:w-2/5 w-full"
        onClick={handleSubmit}
      >
        Add Todo
      </button>
    </div>
  );
};

export default InputBox;
