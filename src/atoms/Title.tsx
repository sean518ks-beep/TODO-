type Props = {
  children: React.ReactNode;
};

export const Title = ({ children }: Props) => {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: 0,
        fontWeight: "bold",
      }}
    >
      {children}
    </div>
  );
};