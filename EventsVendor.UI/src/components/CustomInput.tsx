
interface Props {
  name: string;
  type: string;
}

const CustomInput = ({}: Props) => {
  return (
    <div>
      <label className="font-medium">Email</label>
      <input
        type="email"
        required
        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
      />
    </div>
  );
};

export default CustomInput;
