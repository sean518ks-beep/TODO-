type Props = {
  children: React.ReactNode;
  onClick?: () => void;
};

export const Button = ({ children, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      style={{
        borderRadius: "8px",
        padding: "4px 16px",
        margin: "0px 2px",
      }}
    >
      {children}
    </button>
  );
};

