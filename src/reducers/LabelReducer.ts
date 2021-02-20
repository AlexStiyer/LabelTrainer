import {IlabelState, label} from "../shared/models/Label";
import {ILabelAction, labelActionTypes} from "../actions/labelActions";

const intitialState: IlabelState = {
	labels : [],
	isEditing: false,
	selectedLabel: undefined
};

export const labelReducer = (state = intitialState, action : ILabelAction) : IlabelState => {
	switch(action.type){
	case labelActionTypes.ADD_LABEL:
		return {
			...state,
			labels: [...state.labels, new label("newLabel","#ff0000","")]
		};

	case labelActionTypes.REMOVE_LABEL:
		if(state.labels.length == 1){
			state.labels.push((new label("newLabel","#ff0000","")));
		}
		return {
			...state,
			labels: state.labels.filter(x => x.id !== action.data.id)
		};
		
	case labelActionTypes.UPDATE_LABEL_COLOR:
		return {
			...state,
			labels: state.labels.map(x => {
				if(x.id === action.data.id) 
					x.color = action.data.newColor;
				return x;
			})
		}; 

	case labelActionTypes.UPDATE_LABEL_HOTKEY:
		return {
			...state,
			labels: state.labels.map(x => {
				if(x.id === action.data.id 
						&& action.data.newKey
						&& !state.labels.map(y => y.key)
							.includes(action.data.newKey)) 
					x.key = action.data.newKey;
				return x;
			})
		};

	case labelActionTypes.REMOVE_LABEL_HOTKEY:
		return {
			...state,
			labels: state.labels.map(x => {
				if(x.id === action.data.id)
					x.key = "";
				return x;
			})
		};

	case labelActionTypes.SET_SELECTED_LABEL:
		return {
			...state,
			selectedLabel: action.data.id
		};

	case labelActionTypes.CLEAR_SELECTED_LABEL:
		return {
			...state,
			selectedLabel: undefined
		};

	case labelActionTypes.RENAME_LABEL: 
		return {
			...state,
			labels: state.labels.map(x => {
				if(x.id === action.data.id)
					x.name = action.data.newName;
				return x;
			})
		};
		
	default:
		return state;
	}
};