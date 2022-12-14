import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";

const AddTodoForm = () => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    value
      ? dispatch(
          addTodo({
            title: value,
          })
        )
      : alert("Please enter a todo");

    setValue("");
    console.log("user entered: " + value);
  };

  return (
    <form onSubmit={onSubmit} className="mt-4 mb-4">
      <input
        type="text"
        className="form-control mb-2 mr-sm-2"
        placeholder="Add todo and hit enter..."
        value={value}
        onChange={(event) => setValue(event.target.value)}
      >
			</input>
      <button type="submit" className="btn btn-primary mb-2">
        Save
      </button>
    </form>
  );
};

export default AddTodoForm;
