import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../redux/slices/todoSlice";

export default function TodoItem({ id, title, content }) {
  const dispatch = useDispatch();

  const handleComplete = () => {
    dispatch(toggleTodo(id));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };

  return (
    <li
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        border: "1px solid black",
        width: "500px",
        height: "150px",
      }}
    >
      <section>
        <p>제목: {title}</p>
        <p>내용: {content}</p>
      </section>
      <section>
        <button onClick={handleComplete}>완료</button>
        <button onClick={handleDelete}>삭제</button>
      </section>
    </li>
  );
}
