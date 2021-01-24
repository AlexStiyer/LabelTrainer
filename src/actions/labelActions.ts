import {label} from "../shared/models/Label";
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

type IAddNewLabelAction = IAction<labelActionTypes.ADD_LABEL, {newLabel: label}>;
type IRemoveLabelAction = IAction<labelActionTypes.REMOVE_LABEL, {id: number}>
type IRenameLabelAction = IAction<labelActionTypes.RENAME_LABEL, {id: number, newName: string}>;
type IUpdateLabelColorAction = IAction<labelActionTypes.UPDATE_LABEL_COLOR, {id: number, newColor: string}>;
type IUpdateLabelHotKeyAction = IAction<labelActionTypes.UPDATE_LABEL_HOTKEY, {id: number, newKey: string}>;
type IRemoveLabelHotkeyAction = IAction<labelActionTypes.REMOVE_LABEL_HOTKEY, {id:number}>
type ISetSelectedLabelAction = IAction<labelActionTypes.SET_SELECTED_LABEL, {id:number}>
type IClearSelectedLabelAction = IAction<labelActionTypes.CLEAR_SELECTED_LABEL,undefined>;

export const addNewLabel = (label: label): IAddNewLabelAction => {
	return {
		type: labelActionTypes.ADD_LABEL,
		data: {
			newLabel: label
		}
	};
};

export const removeLabel = (id: number): IRemoveLabelAction => {
	return {
		type: labelActionTypes.REMOVE_LABEL,
		data: {
			id: id
		} 
	};
};

export const renameLabel = (id: number, newName: string): IRenameLabelAction=> {
	return {
		type: labelActionTypes.RENAME_LABEL,
		data: {
			id: id,
			newName: newName
		}
	};
};

export const updateLabelColor = (id: number, newColor: string): IUpdateLabelColorAction => {
	return {
		type: labelActionTypes.UPDATE_LABEL_COLOR,
		data: {
			id: id,
			newColor: newColor
		}
	};
};

export const updateLabelHotKey = (id: number, newKey: string): IUpdateLabelHotKeyAction => {
	return {
		type: labelActionTypes.UPDATE_LABEL_HOTKEY,
		data: {
			id: id,
			newKey: newKey
		}
	};
};

export const removeLabelHotKey = (id: number): IRemoveLabelHotkeyAction => {
	return {
		type: labelActionTypes.REMOVE_LABEL_HOTKEY,
		data: {
			id: id
		} 
	};
};

export const setSelectedLabel = (id: number): ISetSelectedLabelAction => {
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
