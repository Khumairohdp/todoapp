import AddTodo from "@/components/todos/AddTodo";
import { prisma } from "@/utils/prisma";
import Todo from "@/components/todos/Todo";

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
    // max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16
    //w-screen py-20 flex justify-center flex-col items-center
    <div className="w-screen py-20 flex justify-center flex-col items-center">
      <span className="text-4xl font-extrabold uppercase">To-do App</span>
      <h1 className="text-2xl font-extrabold uppercase mb-5 text-center text-[#F87171]">
        <span className="lowercase">Next.js - Prisma - MongoDB</span>
      </h1>

      <div className="flex justify-center flex-col items-center">
        <AddTodo />
        <div>
          <ul className="divide-y divide-gray-200 px-4">
            {data.map((todo, id) => (
              <div className="w-full" key={id}>
                <Todo todo={todo} />
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
