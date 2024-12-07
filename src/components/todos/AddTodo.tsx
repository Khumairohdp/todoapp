import * as actions from "@/actions";
import React from "react";
import Form from "../form/Form";
import Input from "../input/Input";
import Button from "../button/Button";
import { createTodo } from "@/actions";

const AddTodo = () => {
  return (
    <div>
      <Form action={actions.createTodo}>
        <div className="flex gap-4 items-center border-b-2 border-teal-500 py-2">
          <Input name="input" type="text" placeholder="Add Todo ..." />
          <Button type="submit" text="Add" bgColor="bg-teal-500" />
        </div>
      </Form>
    </div>
  );
};

export default AddTodo;
