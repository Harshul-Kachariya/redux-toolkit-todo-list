import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "./store/todoSlice";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { MdDone } from "react-icons/md";

const List = () => {
  let textUpdateRef = useRef(null);
  let firstNameUpdateRef = useRef(null);
  let lastNameUpdateRef = useRef(null);
  let mobileUpdateRef = useRef(null);
  const [editable, setEditable] = useState(true);
  let todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeTodo(id));
    console.log(id);
  };

  const handleUpdate = (id) => {
    setEditable(!editable);
    dispatch(
      updateTodo({
        id,
        text: textUpdateRef.current.value,
        firstName: firstNameUpdateRef.current.value,
        lastName: lastNameUpdateRef.current.value,
        mobile: mobileUpdateRef.current.value,
      })
    );
  };

  console.log(todos);
  return (
    <div className="container mx-auto">
      <h1 className="text-black text-3xl font-bold mb-4">Todo List</h1>
      <div className="overflow-x-auto w-screen">
        <table className="w-full border-2 table-auto ">
          <thead>
            <tr className="w-full border-2 bg-gray-100">
              <th className="px-4 py-2">First Name</th>
              <th className="px-4 py-2">Last Name</th>
              <th className="px-4 py-2">Mobile</th>
              <th className="px-4 py-2">Task</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((item) => (
              <tr key={item.id} className="p-2 text-center w-full border-2">
                <td className="px-4 py-2">
                  <input
                    type="text"
                    ref={firstNameUpdateRef}
                    defaultValue={item.firstName}
                    readOnly={editable}
                    className={`w-full text-center ${
                      editable ? "outline-none" : "outline"
                    }`}
                  />
                </td>
                <td className="px-4 py-2">
                  <input
                    type="text"
                    ref={lastNameUpdateRef}
                    defaultValue={item.lastName}
                    readOnly={editable}
                    className={`w-full text-center ${
                      editable ? "outline-none" : "outline"
                    }`}
                  />
                </td>
                <td className="px-4 py-2">
                  <input
                    type="text"
                    ref={mobileUpdateRef}
                    defaultValue={item.mobile}
                    readOnly={editable}
                    maxLength={10}
                    className={`w-full text-center ${
                      editable ? "outline-none" : "outline"
                    }`}
                  />
                </td>
                <td className="px-4 py-2">
                  <input
                    type="text"
                    ref={textUpdateRef}
                    defaultValue={item.todo}
                    readOnly={editable}
                    className={`w-full text-center ${
                      editable ? "outline-none" : "outline"
                    }`}
                  />
                </td>
                <td className="px-4 py-2 flex justify-center">
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="bg-black text-white px-2 py-1  mr-2"
                  >
                    <RiDeleteBin6Line />
                  </button>
                  <button
                    onClick={() => handleUpdate(item.id)}
                    className="bg-black text-white px-2 py-1 "
                  >
                    {editable ? <MdDone /> : <FaRegEdit />}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default List;
