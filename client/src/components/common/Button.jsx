const Button = ({
  children,
  type = "button",
  variant = "primary",
  onClick,
  disabled = false,
}) => {
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",

    success: "bg-green-600 hover:bg-green-700 text-white",

    danger: "bg-red-600 hover:bg-red-700 text-white",

    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800",
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`
        px-4
        py-2
        rounded-lg
        transition
        duration-200
        font-medium
        disabled:opacity-50
        ${variants[variant]}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
