import { Link, useNavigate } from "react-router-dom";
import BrandLogo from "../components/BrandLogo";
import Button from "../components/Button";
import CustomInput from "../components/CustomInput";
import { registerSchema } from "./_inputValidations";
import { UserRegisterRequest } from "../models/User";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useInjectedServices } from "../contexts/serviceDependency";
import { jwtDecode } from "jwt-decode";
import { useUserStore } from "../state-management/userStore";

const Register = () => {
	const { setUser } = useUserStore();
	const { userService } = useInjectedServices();
	const navigate = useNavigate();

	const {
		handleSubmit,
		register,
		formState: { errors, isSubmitting },
	} = useForm({
		resolver: yupResolver(registerSchema),
	});

	const onRegister = async (data: UserRegisterRequest) => {
		const user = {
			email: data.email,
			id: "",
			token: "",
		};
		const response = await userService.login(data);
		if (response?.token) {
			const decodedToken = (await jwtDecode(response.token)) as any;
			user.id = decodedToken.nameidentifier;
			user.token = response.token;
			setUser(user);
			navigate("/");
			return;
		} else {
			console.log("An error occured while submitting");
		}
	};

	return (
		<main className="w-full h-screen flex flex-col items-center justify-center px-4">
			<div className="max-w-sm w-full text-gray-600 space-y-5">
				<div className="text-center pb-8">
					<BrandLogo />
					<div className="mt-5">
						<h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Register a new account</h3>
					</div>
				</div>
				<form onSubmit={handleSubmit(onRegister)} className="space-y-5">
					<CustomInput
						type="email"
						name="email"
						error={errors.email}
						placeholder="email"
						register={register}
					/>
					<CustomInput
						type="password"
						name="password"
						error={errors.password}
						placeholder="password"
						register={register}
					/>
					<div className="flex items-center justify-between text-sm">
						<div className="flex items-center gap-x-3">
							<input
								type="checkbox"
								id="remember-me-checkbox"
								className="checkbox-item peer hidden"
							/>
							<label
								htmlFor="remember-me-checkbox"
								className="relative flex w-5 h-5 bg-white peer-checked:bg-indigo-600 rounded-md border ring-offset-2 ring-indigo-600 duration-150 peer-active:ring cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45"
							></label>
							<span>Remember me</span>
						</div>
					</div>
					<Button text="Sign in" type="submit" isLoading={isSubmitting} />
				</form>
				<p className="text-center">
					<span className="mr-1"> Registered already? </span>
					<Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
						Login
					</Link>
				</p>
			</div>
		</main>
	);
};

export default Register;
