import React from "react";
import { updateLabelHotKey } from "../../actions/labelActions";
import { label } from "../../shared/models/Label";
import WysInput from "../wysinput/WysInput";
import HotKeyDisplay from "./HotKeyDisplay";

interface ILabelDisplayProps {
		label: label
		updateHotKey: (id: number, newHotKey : string) => void;
		updateLabelName: ( id: number, newLabelName: string) => void;
}

export default class LabelDisplay extends React.Component<ILabelDisplayProps> {
	
	
	render(){
		return(
			<div className="p-2 d-flex flex-rows">
				<WysInput
					displayValue={this.props.label.key}
					inputMaxLength={1}
					commitChange={newHotKey => this.props.updateHotKey(this.props.label.id, newHotKey)}
					className="hot-key-input"
				/>
				<WysInput
					displayValue={this.props.label.name}
					commitChange={(newLabelName) => this.props.updateLabelName(this.props.label.id, newLabelName)}
				/>
			</div>
		);
	}
	
}