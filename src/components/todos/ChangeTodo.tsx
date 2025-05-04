

import React from 'react';
import Form from '../form/Form';
import Input from '../input/Input';
import Button from '../button/Button';
import * as actions from "@/actions";
import { FaCheck } from 'react-icons/fa';

export interface todoProps {
 
    id: string;
    title?: string | null;  
    isCompleted: boolean;
    createdAt?: Date;

}
const ChangeTodo = ({ todo }: { todo: todoProps}) => {
  return (
   <Form action = {actions.changeStatus}>
    <Input name="inputId" value={todo.id} type="hidden"></Input>
    <Button 
     text={<FaCheck />} 
     type="submit"
     actionButton
     bgColor={todo.isCompleted ? "bg-green-400" : undefined} // Only set green when completed
/>
   </Form>
  );
};

export default ChangeTodo;
