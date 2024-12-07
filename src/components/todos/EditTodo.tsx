"use client";

import * as actions from "@/actions";
import React, { useEffect, useState } from "react";
import Form from "../form/Form";
import Input from "../input/Input";
import Button from "../button/Button";
import { MdEdit } from "react-icons/md";
import { todoProps } from "@/types";

const EditTodo = ({ todo }: { todo: todoProps }) => {
  const [editTodo, setEditTodo] = useState(false);
  // const [newTitle, setNewTitle] = useState(todo.title);

  // Whenever the todo prop changes, update the newTitle state
  // useEffect(() => {
  //   setNewTitle(todo.title ?? "");
  // }, [todo.title]);

  const handleEdit = () => {
    if (todo.isCompleted) {
      return;
    }
    setEditTodo(!editTodo);
  };

  const handleSubmit = () => {
    setEditTodo(false);
  };
  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setNewTitle(e.target.value);
  // };

  return (
    <div className="flex gap-5 items-center">
      <Button
        onClick={handleEdit}
        text={<MdEdit />}
        actionButton
        bgColor={""}
      />
      {editTodo ? (
        <Form action={actions.editTodo} onSubmit={handleSubmit}>
          <Input name="inputId" type="hidden"></Input>
          <div className="flex justify-center ">
            <Input
              type="text"
              name="newTitle"
              // value={newTitle} // Set the input value to newTitle
              // onChange={(e: any) => handleChange(e)} // Pass event to handleChange
              placeholder="Edit Todo..."
            />
            <Button type="submit" text="save"></Button>
          </div>
        </Form>
      ) : null}
    </div>
  );
};

export default EditTodo;
