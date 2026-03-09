import { useState } from "react";
import { Button } from "../atoms/Button";

type Props = {
  onClick: () => void;
};

export const InputTodo = (props: Props) => {
  const { onClick } = props;

  const [todoText, setTodoText] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);

  const onChangeTodoText = (event: React.ChangeEvent<HTMLInputElement>) =>
    setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    onClick();

    const newTodos = [...todos, todoText];
    setTodos(newTodos);
    setTodoText("");
  };

  return (
    <div
      style={{
        backgroundColor: "#c6e5d9",
        width: "400px",
        height: "30px",
        padding: "8px",
        margin: "8px",
        borderRadius: "8px",
      }}
    >
      <input
        style={{ borderRadius: "8px", border: "none", padding: "6px 16px" }}
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChangeTodoText}
      />
      <Button onClick={onClickAdd}>追加</Button>
    </div>
  );
};