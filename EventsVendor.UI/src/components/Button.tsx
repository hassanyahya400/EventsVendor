import { BounceLoader } from "react-spinners";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	text: string;
	isLoading?: boolean;
}

const Button = ({ text, type, isLoading, ...rest }: Props) => {
	return (
		<button
			type={type}
			{...rest}
			className="w-full px-auto py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150 text-center"
		>
			{isLoading ? <BounceLoader loading={true} size={25} /> : text}
		</button>
	);
};

export default Button;