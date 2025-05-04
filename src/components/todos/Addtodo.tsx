import React from 'react';

import Form from "../form/Form";
import Input from "../input/Input";
import Button from "../button/Button";
import * as actions from "@/actions";

const Addtodo = () => {
  return (
    <div className="w-full max-w-2xl mx-auto mt-4">
      <Form action={actions.createTodo}>
        <div className="flex items-center gap-3">
          <Input name="input" type="text" placeholder="Add To-do Task Here..." />
          <Button type="submit" text="Add"/>
        </div>
      </Form>
    </div>
  );
};

export default Addtodo;
