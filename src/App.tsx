import './App.css'
import { useState } from "react";
import { InputTodo } from './components/InputTodo';
import { TodoTodo } from './components/TodoTodo';
import { InProgressTodo } from './components/InProgressTodo';
import { DoneTodo } from './components/DoneTodo';

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

 const deleteTodo = (id: number) => {
  setTodos(todos.filter((todo) => todo.id !== id));
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
      <InputTodo
        inputText={inputText}
        setInputText={setInputText}
        addTodo={addTodo}
      />

      <TodoTodo
      todos={todos.filter((todo) => todo.status === "todo")}
    changeStatus={changeStatus}
    deleteTodo={deleteTodo}/>

      {/* 進行中 */}
      <InProgressTodo
      todos={todos.filter((todo) => todo.status === "inProgress")}
  changeStatus={changeStatus}
  deleteTodo={deleteTodo}/>

      {/* 完了 */}
     <DoneTodo
     todos={todos.filter((todo) => todo.status === "done")}
  changeStatus={changeStatus}
  deleteTodo={deleteTodo}/>
    </>
  );
}

export default App;
