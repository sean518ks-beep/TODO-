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

export const DoneTodo = (props: Props) => {
  const { todos, changeStatus, deleteTodo } = props;

  return (
    <div className="done-area">
      <Title>完了のTODO</Title>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <p>{todo.text}</p>

            <Button onClick={() => changeStatus(todo.id, "todo")}>
              未着手
            </Button>

            <Button onClick={() => changeStatus(todo.id, "inProgress")}>
              進行中
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