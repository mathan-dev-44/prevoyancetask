const PageContainer = ({ children }) => {
  return (
    <div
      className="
        mx-auto
        max-w-7xl
        px-6
        py-8
      "
    >
      {children}
    </div>
  );
};

export default PageContainer;
