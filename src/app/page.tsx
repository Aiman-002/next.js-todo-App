// This is the main page of the application
import Addtodo from "@/components/todos/Addtodo";
import TodoList from "@/components/todos/TodoList";
import { prisma } from "@/utils/prisma";

async function getData() {
  const data = await prisma.todo.findMany({
    select: {
      title: true,
      id: true,
      isCompleted: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return data;
}

export default async function Home() {
  const data = await getData();

  return (
    <div className="w-screen py-20 flex justify-center flex-col items-center">
      <span className="text-3xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-gray-400 via-slate-300 to-gray-100 text-transparent bg-clip-text drop-shadow-md">
        TO DO APP
      </span>

      <h1 className="text-1xl font-extrabold uppercase mb-5 text-center bg-gradient-to-r from-gray-400 via-slate-300 to-gray-100 text-transparent bg-clip-text drop-shadow-md">
        <span className="lowercase">W/ </span>server Actions
      </h1>

      <div className="flex justify-center flex-col items-center">
        <Addtodo />
        <TodoList todos={data} />
      </div>
    </div>
  );
}
