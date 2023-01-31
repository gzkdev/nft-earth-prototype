interface IProp {
  children: React.ReactNode;
}

const AppLayoutContainer = ({ children }: IProp) => {
  return <div>{children}</div>;
};

export default AppLayoutContainer;
