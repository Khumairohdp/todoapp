import { todoProps } from "@/types";
import React from "react";
import ChangeTodo from "./ChangeTodo";
import EditTodo from "./EditTodo";
import DeleteTodo from "./DeleteTodo";
import Input from "../input/Input";

const Todo = ({ todo }: { todo: todoProps }) => {
  const todoStyle = {
    textDecoration: todo.isCompleted === true ? "line-through" : "none",
    opacity: todo.isCompleted === true ? 0.5 : 1,
  };
  return (
    <li className="py-4">
      <div
        style={todoStyle}
        className=" mx-auto flex items-center justify-between rounded-2xl"
      >
        <ChangeTodo todo={todo} />
        <span className="ml-5 font-bold grow">{todo.title}</span>
        <div className="flex items-center ">
          <EditTodo todo={todo} />
        </div>
        <div className="flex items-center ">
          <DeleteTodo todo={todo} />
        </div>
      </div>
    </li>
  );
};

export default Todo;
