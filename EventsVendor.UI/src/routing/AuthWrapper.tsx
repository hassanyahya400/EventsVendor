import { Outlet } from "react-router-dom";
import { useUserStore } from "../state-management/userStore";
import useAuthRedirect from "../hooks/useAuthRedirect";

const AuthWrapper: React.FC = () => {
	const { user } = useUserStore();
	const redirectToLogin = !user;

	useAuthRedirect(redirectToLogin, "/login", "User not logged in, click Ok to login");

	return <Outlet />;
};

export default AuthWrapper;
