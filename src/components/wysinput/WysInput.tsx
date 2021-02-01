import "./WysInput.scss";
import React, { createRef } from "react";

export interface IWysInputProps {
  displayValue: string;
	commitChange: (newvalue: string) => unknown;
	className?: string;
	inputMaxLength? : number;
}

export interface IWysInputState {
  inputValue: string;
}

/**
  'What You See' input. Functions as text until focused. 
  User must hit enter to commit changes and submit the change.
	If input loses focus, changes are discarded.
 */
class WysInput extends React.Component<IWysInputProps, IWysInputState> {
	
	//Ref to control input focus
	private inputRef: React.RefObject<HTMLInputElement>;

	constructor(props: IWysInputProps){
		super(props);
		this.state = {
			inputValue: this.props.displayValue
		};
		this.inputRef = createRef();
	}

	/*
		Resetting focus after submit causes inputValue and displayValue to desync 
		and swap after every enter.
		This ensures whatever is commi	ted to the top level state is displayed.
	*/
	componentDidUpdate(prevProps: IWysInputProps){
		if(this.props.displayValue != prevProps.displayValue){
			this.setState({inputValue: this.props.displayValue});
		}
	}

	handleInput(newValue: string) {
		this.setState({
			inputValue: newValue.substr(0,this.props.inputMaxLength)
		});
	}

	discardChanges(){
		this.setState({
			inputValue: this.props.displayValue
		});
	}

	render(){
		return(
			<form 
				data-testid={"wysform"}
				onSubmit={(event)=>{
					event.preventDefault();
					this.props.commitChange(this.state.inputValue);
					this.inputRef.current?.blur();
				}}>
				<p className={this.props.className}>
					<input
						ref={this.inputRef}
						onBlur={()=>{this.discardChanges();}}
						onChange={(event)=>{this.handleInput(event.target.value);}}
						value={this.state.inputValue}
						data-testid={"wysinput"}
					/>
				</p>
			</form>
		);
	}
}

export default WysInput;