import { Outlet, useNavigate } from "react-router-dom";
import { useUserStore } from "../state-management/userStore";
import { useEffect } from "react";

const AuthWrapper: React.FC = () => {
	const { user } = useUserStore();
	const navigate = useNavigate();

	useEffect(() => {
		if (!user) {
			navigate("/login");
			alert("You need to login to access this route, click ok to login");
		}
	}, [user]);

	return <Outlet />;
};

export default AuthWrapper;