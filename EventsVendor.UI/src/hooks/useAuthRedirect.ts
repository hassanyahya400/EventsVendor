// useRedirect.ts
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useAuthRedirect = (condition: boolean, path: string, alertMessage?: string) => {
	const navigate = useNavigate();

	useEffect(() => {
		if (condition) {
			window.history.replaceState(null, "", path);
			navigate(path, { replace: true });

			if (alertMessage) {
				alert(alertMessage);
			}
		}
	}, [condition, navigate, path]);
};

export default useAuthRedirect;
