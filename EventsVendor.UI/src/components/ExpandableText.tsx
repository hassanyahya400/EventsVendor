import { FC, useState } from "react";

interface Props {
	children: string;
}

const ExpandableText: FC<Props> = ({ children }: Props) => {
	const [isExpanded, setisExpanded] = useState<boolean>(false);
	const limit = 350;

	if (!children) return null;

	const textToDisplay = isExpanded ? children : children.substring(0, limit) + "...";

	return (
		<>
			<p>
				{textToDisplay}{" "}
				<span
					onClick={() => setisExpanded((prev) => !prev)}
					className="ml-2 cursor-pointer font-medium text-indigo-600 hover:text-indigo-500"
				>
					{isExpanded ? "Show less" : "Show more"}
				</span>
			</p>
		</>
	);
};

export default ExpandableText;
