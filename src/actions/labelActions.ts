import IAction from "./IAction";

export enum labelActionTypes {
    ADD_LABEL = "ADD_LABEL",
    REMOVE_LABEL = "REMOVE_LABEL",
    RENAME_LABEL = "RENAME_LABEL",
    UPDATE_LABEL_COLOR = "SET_LABEL_COLOR",
    UPDATE_LABEL_HOTKEY = "SET_LABEL_HOTKEY",
    REMOVE_LABEL_HOTKEY = "REMOVE_LABEL_HOTKEY",
    SET_SELECTED_LABEL = "SET_SELECTED_LABEL",
    CLEAR_SELECTED_LABEL = "CLEAR_SELECTED_LABEL",
}

type IAddNewLabelAction = IAction<labelActionTypes.ADD_LABEL, undefined>;
type IRemoveLabelAction = IAction<labelActionTypes.REMOVE_LABEL, {id : string}>
type IRenameLabelAction = IAction<labelActionTypes.RENAME_LABEL, {id : string, newName: string}>;
type IUpdateLabelColorAction = IAction<labelActionTypes.UPDATE_LABEL_COLOR, {id : string, newColor: string}>;
type IUpdateLabelHotKeyAction = IAction<labelActionTypes.UPDATE_LABEL_HOTKEY, {id : string, newKey: string}>;
type IRemoveLabelHotkeyAction = IAction<labelActionTypes.REMOVE_LABEL_HOTKEY, {id: string}>
type ISetSelectedLabelAction = IAction<labelActionTypes.SET_SELECTED_LABEL, {id: string}>
type IClearSelectedLabelAction = IAction<labelActionTypes.CLEAR_SELECTED_LABEL,undefined>;

export const addNewLabel = (): IAddNewLabelAction => {
	return {
		type: labelActionTypes.ADD_LABEL,
		data: undefined
	};
};

export const removeLabel = (id : string): IRemoveLabelAction => {
	return {
		type: labelActionTypes.REMOVE_LABEL,
		data: {
			id: id
		} 
	};
};

export const renameLabel = (id : string, newName: string): IRenameLabelAction=> {
	return {
		type: labelActionTypes.RENAME_LABEL,
		data: {
			id: id,
			newName: newName
		}
	};
};

export const updateLabelColor = (id : string, newColor: string): IUpdateLabelColorAction => {
	return {
		type: labelActionTypes.UPDATE_LABEL_COLOR,
		data: {
			id: id,
			newColor: newColor
		}
	};
};

export const updateLabelHotKey = (id : string, newKey: string): IUpdateLabelHotKeyAction => {
	return {
		type: labelActionTypes.UPDATE_LABEL_HOTKEY,
		data: {
			id: id,
			newKey: newKey
		}
	};
};

export const removeLabelHotKey = (id : string): IRemoveLabelHotkeyAction => {
	return {
		type: labelActionTypes.REMOVE_LABEL_HOTKEY,
		data: {
			id: id
		} 
	};
};

export const setSelectedLabel = (id : string): ISetSelectedLabelAction => {
	return {
		type: labelActionTypes.SET_SELECTED_LABEL,
		data: {
			id: id
		} 
	};
};

export const clearSelectedLabel = (): IClearSelectedLabelAction => {
	return {
		type: labelActionTypes.CLEAR_SELECTED_LABEL,
		data: undefined
	};
};

export type ILabelAction = IAddNewLabelAction 
    | IRemoveLabelAction 
    | IRenameLabelAction 
    | IUpdateLabelColorAction 
    | IUpdateLabelHotKeyAction 
    | IRemoveLabelAction 
    | ISetSelectedLabelAction 
    | IClearSelectedLabelAction 
    | IRemoveLabelHotkeyAction;
