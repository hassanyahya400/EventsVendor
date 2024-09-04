interface Props {
  text: string;
}

const Button = ({ text }: Props) => {
  return (
    <button className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
      {text}
    </button>
  );
};

export default Button;
