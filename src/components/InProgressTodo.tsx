import { Button } from "../atoms/Button";
import { Title } from "../atoms/Title";

type Todo = {
  id: number;
  text: string;
  status: "todo" | "inProgress" | "done";
};

type Props = {
  todos: Todo[];
  changeStatus: (id: number, status: Todo["status"]) => void;
  deleteTodo: (id: number) => void;
};

export const InProgressTodo = (props: Props) => {
  const { todos, changeStatus, deleteTodo } = props;

  return (
    <div className="inProgress-area">
      <Title>進行中のTODO</Title>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <p>{todo.text}</p>

            <Button onClick={() => changeStatus(todo.id, "done")}>
              完了
            </Button>

            <Button onClick={() => changeStatus(todo.id, "todo")}>
              未着手
            </Button>

            <Button onClick={() => deleteTodo(todo.id)}>
              削除
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};