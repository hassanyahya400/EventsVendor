import { yupResolver } from "@hookform/resolvers/yup";
import { jwtDecode } from "jwt-decode";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import BrandLogo from "../components/BrandLogo";
import Button from "../components/Button";
import CustomInput from "../components/CustomInput";
import { useInjectedServices } from "../contexts/serviceDependency";
import { UserRegisterRequest } from "../models/User";
import { useUserStore } from "../state-management/userStore";
import { registerSchema } from "./_inputValidations";

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
			navigate("/", { replace: true });
			alert("Register successful, click OK to proceed");
			return;
		} else {
			alert("An error occured while submitting, please try again");
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
