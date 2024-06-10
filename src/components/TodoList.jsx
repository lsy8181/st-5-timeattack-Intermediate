import TodoItem from "./TodoItem";
import React from "react";
import { useSelector } from "react-redux";

export default function TodoList({ isDone }) {
  const todos = useSelector((state) =>
    state.todos.filter((todo) => todo.isDone === isDone)
  );

  return (
    <section>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            content={todo.content}
          />
        ))}
      </ul>
    </section>
  );
}
