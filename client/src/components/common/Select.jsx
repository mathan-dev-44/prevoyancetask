const Select = ({ label, value, name, options, onChange }) => {
  return (
    <div className="space-y-1">
      <label className="font-medium">{label}</label>

      <select
        name={name}
        value={value}
        onChange={onChange}
        className="
          w-full
          rounded-lg
          border
          border-gray-300
          px-3
          py-2
          focus:ring-2
          focus:ring-blue-500
        "
      >
        {options.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
