import React  from "react";
import "./ToolPanel.scss";

interface IToolPanelPropTypes {
	children? : unknown;
}

const ToolPanel: React.FC<IToolPanelPropTypes> = (props) => {
	return (
		<div className="ToolPanel">
			{props.children}
		</div>
	);
};    

export default ToolPanel;