import { BounceLoader } from "react-spinners";

const PagePreloader = () => {
	return (
		<div className="flex h-screen justify-center items-center">
			<BounceLoader loading={true} size={30} />
		</div>
	);
};

export default PagePreloader;
