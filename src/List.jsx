import React, { useEffect, useRef, useState } from "react";
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
  const [editable, setEditable] = useState(false);
  const [editId, setEditId] = useState();
  let todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  console.log(todos);
  const updateData = (id) => {
    setEditable(false);
    setEditId();
    dispatch(
      updateTodo({
        id,
        todo: textUpdateRef.current.value.trim(),
        firstName: firstNameUpdateRef.current.value.trim(),
        lastName: lastNameUpdateRef.current.value.trim(),
        mobile: mobileUpdateRef.current.value.trim(),
      })
    );
  };

  const handleUpdate = (id) => {
    if (todos) {
      if (todos.find((item) => item.id == id)) {
        setEditable(true);
        setEditId(id);
      }
    }
  };

  return (
    <div className="container  mt-4 overflow-x-auto">
      <div className=" w-screen p-3">
        <table className="w-full border-2 table-auto">
          <thead>
            <tr className="w-full border-2 bg-gray-100">
              <th className="px-4 py-2">Image</th>
              <th className="px-4 py-2">First Name</th>
              <th className="px-4 py-2">Last Name</th>
              <th className="px-4 py-2">Mobile</th>
              <th className="px-4 py-2">Task</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {todos?.map((item) => (
              <tr key={item.id} className="p-2 text-center w-full border-2">
                {console.log(item, "sdsd")}
                <td className=" px-4 py-2">
                  <img
                    src={item.image}
                    alt=""
                    className="w-12 h-12 rounded-md"
                  />
                </td>
                <td className=" px-4 py-2">
                  <input
                    type="text"
                    ref={firstNameUpdateRef}
                    defaultValue={item.firstName}
                    readOnly={item.id == editId ? false : true}
                    className={`w-full text-center ${
                      item.id != editId ? "outline-none" : "outline"
                    }`}
                  />
                </td>
                <td className="px-4 py-2">
                  <input
                    type="text"
                    ref={lastNameUpdateRef}
                    defaultValue={item.lastName}
                    readOnly={item.id == editId ? false : true}
                    className={`w-full text-center ${
                      item.id != editId ? "outline-none" : "outline"
                    }`}
                  />
                </td>
                <td className="px-4 py-2">
                  <input
                    type="text"
                    ref={mobileUpdateRef}
                    defaultValue={item.mobile}
                    readOnly={item.id == editId ? false : true}
                    maxLength={10}
                    className={`w-full text-center ${
                      item.id != editId ? "outline-none" : "outline"
                    }`}
                  />
                </td>
                <td className="px-4 py-2">
                  <input
                    type="text"
                    ref={textUpdateRef}
                    defaultValue={item.todo}
                    readOnly={item.id == editId ? false : true}
                    className={`w-full text-center ${
                      item.id != editId ? "outline-none" : "outline"
                    }`}
                  />
                </td>
                <td className="px-4 py-2 flex justify-center">
                  <button
                    onClick={() => dispatch(removeTodo(item.id))}
                    className="bg-black text-white px-2 py-1  mr-2"
                  >
                    <RiDeleteBin6Line />
                  </button>
                  <button className="bg-black text-white px-2 py-1 ">
                    {item.id == editId ? (
                      <MdDone onClick={() => updateData(item.id)} />
                    ) : (
                      <FaRegEdit onClick={() => handleUpdate(item.id)} />
                    )}
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
