import {createStore} from "redux";
import { labelReducer } from "../reducers/LabelReducer";
import {combineReducers, Store} from "redux";
import { IlabelState } from "../shared/models/Label";

export interface IAppState {
    LabelListState: IlabelState
}

const rootReducer = combineReducers<IAppState>({
	LabelListState: labelReducer
});

//TODO: Load State From LocalStorage, If No Local Storage Is Found Load a Default Label
// eslint-disable-next-line @typescript-eslint/no-explicit-any

const defaultState : IAppState = {
	LabelListState: {
		labels: [
			{
				id: 0,
				color:"#f00",
				key: "1",
				name: "label0"
			}
		],
		selectedLabel: 0,
		isEditing: false
	}
};

export default function configureStore(initState: any = defaultState):Store<IAppState, any> {
	const store = createStore(rootReducer, initState);
	return store;
}