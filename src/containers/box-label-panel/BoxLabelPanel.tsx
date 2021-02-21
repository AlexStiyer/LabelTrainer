import React from "react";
import { connect } from "react-redux";
import { addNewLabel, clearSelectedLabel,
	removeLabel, removeLabelHotKey, renameLabel,
	updateLabelColor, updateLabelHotKey,
	setSelectedLabel 
} from "../../actions/labelActions";
import LabelDisplay from "../../components/label-display/LabelDisplay";
import { IlabelState } from "../../shared/models/Label";
import { IAppState } from "../../store/Store";
import BoxLabelPanelForm from "./BoxLabelPanelForm";

interface IPropsFromState {
    labelListState: IlabelState
}

const mapStateToProps = (appState: IAppState): IPropsFromState => {
	return {
		labelListState: appState.LabelListState
	};
};

interface IPropsFromDispatch {
    addNewLabel: () => unknown;
    removeLabel: (id : string) => unknown;
    renameLabel: (id : string, newName: string) => unknown;
    updateLabelColor: (id: string, newColor: string) => unknown;
    updateLabelHotKey: (id : string, newKey: string) => unknown;
    removeLabelHotKey: (id : string) => unknown;
    setSelectedLabel: (id : string) => unknown;
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

type Props = IPropsFromDispatch & IPropsFromState;

class BoxLabelsPanel extends React.Component<Props> {
	constructor(props: Props){
		super(props);
	}
	
	render(){
		return(
			<div className="d-flex flex-column justify-content-start">
				<BoxLabelPanelForm
					addLabel={() => this.props.addNewLabel()}
				/>
				{this.props.labelListState.labels.map(label => {
					return (
						<LabelDisplay
							key={label.id}
							label={label}
							updateHotKey={(id,newHotKey) => this.props.updateLabelHotKey(id,newHotKey)}
							updateLabelName={(id,newLabelName) => this.props.renameLabel(id,newLabelName)}
							updateColor={(id,newLabelName) => this.props.updateLabelColor(id,newLabelName)}
							deleteLabel={(id)=> this.props.removeLabel(id)}
						/>
					);	
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