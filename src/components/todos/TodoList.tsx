"use client";

import { useState } from "react";
import Todo from "./Todo";
import Filter from "./Filter";

type TodoItem = {
    id: string;
    title: string | null; // ✅ allow null
    isCompleted: boolean;
  };

export default function TodoList({ todos }: { todos: TodoItem[] }) {
  const [filter, setFilter] = useState("all");

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.isCompleted;
    if (filter === "completed") return todo.isCompleted;
    return true; // "all"
  });

  return (
    <>
      <Filter filter={filter} setFilter={setFilter} />

      <div className="flex flex-col gap-5 items-center justify-center mt-10 w-screen">
        {filteredTodos.map((todo) => (
          <div className="w-full" key={todo.id}>
            <Todo todo={todo} />
          </div>
        ))}
      </div>
    </>
  );
}
