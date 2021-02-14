import "./ColorInput.scss";
import React  from "react";
import {CirclePicker} from "react-color";

export interface IColorInputProps {
  displayColor: string;
  updateColor: (newValue: string) => unknown;
}

export interface IColorInputState {
  isInputOpen: boolean
}

//TODO: Improve Alignment Once App Panel Structure Finalized
//TODO: Move isInputOpen state to props so you can close one if another is opened
//TODO: Add ref to close form when click is outside of color selctor
class ColorInput extends React.Component<IColorInputProps, IColorInputState> {
	constructor(props: IColorInputProps){
		super(props);
		this.state = {
			isInputOpen: false
		};
	}

	render(){
		return(
			<div>
				<a onClick={() => this.setState({isInputOpen: true})}>
					<div 
						style={{backgroundColor: this.props.displayColor}} 
						className="color-input"
					/>
				</a>
				{this.state.isInputOpen? 
					<div className="color-picker-popover">
						<a onClick={() => this.setState({isInputOpen: false}) }>
							<CirclePicker 
								color={this.props.displayColor}
								onChange={(result) => this.props.updateColor(result.hex)}
							/>
						</a>
					</div>
					:
					<div/>
				}
			</div>
		);
	}
}

export default ColorInput;