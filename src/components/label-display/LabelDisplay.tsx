import "./LabelDisplay.scss";

import React from "react";
import { label } from "../../shared/models/Label";
import WysInput from "../wys-input/WysInput";
import ColorInput from "../color-input/ColorInput";

interface ILabelDisplayProps {
		label: label
		updateHotKey: (id : string, newHotKey : string) => void;
		updateLabelName: ( id : string, newLabelName: string) => void;
		updateColor: (id : string, newColor: string) => void;
		deleteLabel: (id: string) => void;
}

export default class LabelDisplay extends React.Component<ILabelDisplayProps> {
	
	handleLabelNameChange(id: string, newValue : string){
		if(newValue.length < 1){
			this.props.deleteLabel(id);
			return;
		}
		this.props.updateLabelName(id, newValue);
	}
		
	render(){
		return(
			<div className="p-2 mb-2 d-flex flex-row justify-content-between align-items-center label-container">
				<WysInput
					displayValue={this.props.label.key}
					inputMaxLength={1}
					commitChange={newHotKey => this.props.updateHotKey(this.props.label.id, newHotKey)}
					className="mb-0 p-0 hot-key-input"
				/>
				<WysInput
					displayValue={this.props.label.name}
					commitChange={newLabelName =>  this.handleLabelNameChange(this.props.label.id, newLabelName)}
					className="mb-0 label-name-input"
				/>
				<ColorInput
					displayColor={this.props.label.color}
					updateColor={newColor => this.props.updateColor(this.props.label.id, newColor)}
				/>
			</div>
		);
	}
	
}