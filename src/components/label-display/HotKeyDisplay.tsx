import React from "react";
import WysInput from "../wysinput/WysInput";
import "./LabelDisplay.scss";

interface IHotKeyDisplayProps{
  hotKey: string;
  updateKey: (newKey: string) => unknown;
}

const HotKeyDisplay: React.FC<IHotKeyDisplayProps> = (props) => {
	return (
		<div className="hot-key-display">
			<WysInput
				displayValue={props.hotKey}
				commitChange={(newValue)=>{props.updateKey(newValue);}}
				inputMaxLength={1}
			/>
		</div>
	);
};

export default HotKeyDisplay;