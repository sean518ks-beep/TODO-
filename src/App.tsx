import './App.css'
import { useState } from "react";
import { Button } from "./atoms/Button";
import { Title } from "./atoms/Title";

type Todo = {
  id: number;
  text: string;
  status: "todo" | "inProgress" | "done";
};

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = () => {
    if (inputText === "") return;

    setTodos([
      ...todos,
      {
        id: Date.now(),
        text: inputText,
        status: "todo",
      },
    ]);
    setInputText("");
  };

  const changeStatus = (id: number, status: Todo["status"]) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, status } : todo
      )
    );
  };

  return (
    <>
      {/* 入力エリア */}
      <div className="input-area">
        <input
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="TODOを入力"
        />
        <Button onClick={addTodo}>追加</Button>
      </div>

      {/* 未着手 */}
      <div className="todo-area">
        <Title>未着手のTODO</Title>
        <ul>
          {todos
            .filter((todo) => todo.status === "todo")
            .map((todo) => (
              <li key={todo.id}>
                <p>{todo.text}</p>
                <Button onClick={() => changeStatus(todo.id, "inProgress")}>
                  進行中
                </Button>
                <Button onClick={() => changeStatus(todo.id, "done")}>
                  完了
                </Button>
              </li>
            ))}
        </ul>
      </div>

      {/* 進行中 */}
      <div className="inProgress-area">
        <Title>進行中のTODO</Title>
        <ul>
          {todos
            .filter((todo) => todo.status === "inProgress")
            .map((todo) => (
              <li key={todo.id}>
                <p>{todo.text}</p>
                <Button onClick={() => changeStatus(todo.id, "done")}>
                  完了
                </Button>
                <Button onClick={() => changeStatus(todo.id, "todo")}>
                  未着手
                </Button>
              </li>
            ))}
        </ul>
      </div>

      {/* 完了 */}
      <div className="done-area">
        <Title>完了のTODO</Title>
        <ul>
          {todos
            .filter((todo) => todo.status === "done")
            .map((todo) => (
              <li key={todo.id}>
                <p>{todo.text}</p>
                <Button onClick={() => changeStatus(todo.id, "todo")}>
                  未着手
                </Button>
                <Button onClick={() => changeStatus(todo.id, "inProgress")}>
                  進行中
                </Button>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}

export default App;
