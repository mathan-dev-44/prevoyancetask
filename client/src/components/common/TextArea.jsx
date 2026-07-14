const TextArea = ({ label, name, value, onChange, error }) => {
  return (
    <div className="space-y-1">
      <label className="font-medium">{label}</label>

      <textarea
        rows={4}
        name={name}
        value={value}
        onChange={onChange}
        className="
          w-full
          rounded-lg
          border
          border-gray-300
          p-3
          focus:ring-2
          focus:ring-blue-500
          outline-none
        "
      />

      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default TextArea;
