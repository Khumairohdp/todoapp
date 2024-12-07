import React from "react";
import Form from "../form/Form";
import Button from "../button/Button";
import Input from "../input/Input";
import * as actions from "@/actions";
import { todoProps } from "@/types";
import { IoMdCheckboxOutline } from "react-icons/io";
import { MdCheckBoxOutlineBlank } from "react-icons/md";

const ChangeTodo = ({ todo }: { todo: todoProps }) => {
  return (
    <Form action={actions.changeStatus}>
      <Input
        name="inputId"
        type="hidden"
        placeholder=""
        value={todo.id}
      ></Input>

      <Button
        text={
          todo.isCompleted ? (
            <IoMdCheckboxOutline size={24} />
          ) : (
            <MdCheckBoxOutlineBlank size={24} />
          )
        }
        type="submit"
        actionButton
        bgColor=""
      ></Button>
    </Form>
  );
};

export default ChangeTodo;
