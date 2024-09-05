import { FieldError, FieldValues, Path, UseFormRegister } from "react-hook-form";

interface Props<T extends FieldValues> {
	register: UseFormRegister<T>;
	name: Path<T>;
	type: string;
	error: FieldError | undefined;
	placeholder?: string;
}

const CustomInput = <T extends FieldValues>({
	register,
	name,
	type,
	error,
	placeholder,
}: Props<T>) => {
	return (
		<div>
			<label className="font-medium">{name}</label>
			<input
				type={type}
				placeholder={placeholder}
				{...register(name)}
				className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
			/>
			<p className="text-red-500">{error?.message}</p>
		</div>
	);
};

export default CustomInput;
