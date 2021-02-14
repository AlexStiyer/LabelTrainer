import React  from "react";
import "./ToolPanel.scss";

const ToolPanel: React.FC<unknown> = (props) => {
	return (
		<div className="ToolPanel p-2">
			{props.children}
		</div>
	);
};    

export default ToolPanel;