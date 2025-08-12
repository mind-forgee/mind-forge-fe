const DialogLayout = ({ children }) => {
  return (
    <div className="flex items-center justify-center min-h-screen  p-4">
      <div className=" rounded-lg  max-w-4xl w-full  text-center">
        {children}
      </div>
    </div>
  );
};

export default DialogLayout;