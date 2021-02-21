import "./BoxLabelPanel.scss";
import React  from "react";

interface IBoxLabelPanelForm {
  addLabel : () => unknown;
}


const BoxLabelPanelForm: React.FC<IBoxLabelPanelForm> = (props) => {
	return (
		<div className="mb-2 d-flex flex-row justify-content-between align-items-center">
			<div>
			</div>
			<div>
				<p className="mb-0 ml-4 header-text">Labels</p>
			</div>
			<div>
				<a className="add-label" onClick={() => props.addLabel()}>
					<h4 className="mb-0">+</h4>
				</a>
			</div>
		</div>
	);
};    

export default BoxLabelPanelForm;