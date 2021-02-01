import React from "react";
import { connect } from "react-redux";
import { addNewLabel, clearSelectedLabel, removeLabel, removeLabelHotKey, renameLabel, updateLabelColor, updateLabelHotKey, setSelectedLabel } from "../../actions/labelActions";
import LabelDisplay from "../../components/label-display/LabelDisplay";
import WysInput from "../../components/wysinput/WysInput";
import { labelReducer } from "../../reducers/LabelReducer";
import { IlabelState, label } from "../../shared/models/Label";
import { IAppState } from "../../store/Store";

interface IPropsFromState {
    labelListState: IlabelState
}

const mapStateToProps = (appState: IAppState): IPropsFromState => {
	return {
		labelListState: appState.LabelListState
	};
};

interface IPropsFromDispatch {
    addNewLabel: (lable: label) => unknown;
    removeLabel: (id: number) => unknown;
    renameLabel: (id: number, newName: string) => unknown;
    updateLabelColor: (id:number, newColor: string) => unknown;
    updateLabelHotKey: (id: number, newKey: string) => unknown;
    removeLabelHotKey: (id: number) => unknown;
    setSelectedLabel: (id: number) => unknown;
    clearSelectedLabel: () => unknown;
}

const mapDispatchToProps: IPropsFromDispatch = {
	addNewLabel: addNewLabel,
	removeLabel: removeLabel,
	renameLabel: renameLabel,
	updateLabelColor: updateLabelColor,
	updateLabelHotKey: updateLabelHotKey,
	removeLabelHotKey: removeLabelHotKey,
	setSelectedLabel: setSelectedLabel,
	clearSelectedLabel: clearSelectedLabel,
};

interface IBoxLabelPanelState{
	keyBeingEdited: number
	fakeInput: string;
}

type Props = IPropsFromDispatch & IPropsFromState;

class BoxLabelsPanel extends React.Component<Props, IBoxLabelPanelState> {
	constructor(props: Props){
		super(props);
		this.state = {keyBeingEdited: 0, fakeInput: "yeet"};
	}
	
	render(){
		return(
			<div>
				{this.props.labelListState.labels.map(label => {
					<LabelDisplay
						key={label.id}
						label={label}
						updateHotKey={this.props.updateLabelHotKey}
						updateLabelName={this.props.renameLabel}
					/>;
				})}
			</div>
		);
	}
}

// eslint-disable-next-line @typescript-eslint/ban-types
export default connect<IPropsFromState,IPropsFromDispatch,{},IAppState>(
	mapStateToProps,
	mapDispatchToProps,
)(BoxLabelsPanel);

//Export unconnected component for testing
export const _BoxLabelsPanel = BoxLabelsPanel;