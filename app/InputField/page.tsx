interface InputFieldProps {
  label: string;
  id: string;
  placeholder?: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, id, placeholder }) => {
  return (
    <div className="flex items-center space-x-4">
      <label htmlFor={id} className="text-lg font-medium text-gray-700">
        {label}
      </label>
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        className="w-80 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default InputField;