import React from "react";
import { connect } from "react-redux";
import { addNewLabel, clearSelectedLabel, removeLabel, removeLabelHotKey, renameLabel, updateLabelColor, updateLabelHotKey, setSelectedLabel } from "../../actions/labelActions";
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
}

type Props = IPropsFromDispatch & IPropsFromState;

class BoxLabelsPanel extends React.Component<Props, IBoxLabelPanelState> {
	
	componentDidMount(){
		this.props.addNewLabel({
			id: 3,
			color: "#fff",
			name: "Thingy",
			key:""
		});
	}
	
	render(){
		return(
			<div>
				{JSON.stringify(this.props.labelListState.labels)}
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