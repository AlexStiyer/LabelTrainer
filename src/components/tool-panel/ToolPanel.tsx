import React  from "react";
import "./ToolPanel.scss";

const ToolPanel: React.FC<unknown> = (props) => {
	return (
		<div className="ToolPanel">
			{props.children}
		</div>
	);
};    

export default ToolPanel;