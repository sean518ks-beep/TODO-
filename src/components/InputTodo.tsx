import { Button } from "../atoms/Button";

type Props = {
  inputText: string;
  setInputText: (text: string) => void;
  addTodo: () => void;
};

export const InputTodo = (props: Props) => {
  const { inputText, setInputText, addTodo } = props;

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
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
        style={{
          borderRadius: "8px",
          border: "none",
          padding: "6px 16px",
        }}
        placeholder="TODOを入力"
        value={inputText}
        onChange={onChangeInput}
      />
      <Button onClick={addTodo}>追加</Button>
    </div>
  );
};
