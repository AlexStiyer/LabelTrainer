import IAction from "./IAction";
import { label } from "../shared/models/Label";
import { INormalizedPosition } from "../shared/models/Annotation";

export enum annotationActionTypes {
	ADD_ANNOTATION = "ADD_ANNOTATION",
	REMOVE_ANNOTATION = "REMOVE_ANNOTATION",
	REPOSITION_ANNOTATION="REPOSITION_ANNOTATION",
	UPDATE_ANNOTATION_LABEL = "UPDATE_ANNOTATION_LABEL",
	SET_SELECTED_ANNOTATION = "SET_SELECTED_ANNOTATION",
	CLEAR_SELECTED_ANNOTATION = "CLEAR_SELECTED_ANNOTATION"
}

type IAddNewAnnotationAction = IAction<annotationActionTypes.ADD_ANNOTATION, {label: label, position: INormalizedPosition, image: string}>;
type IRemoveAnnotationAction = IAction<annotationActionTypes.REMOVE_ANNOTATION, undefined>;
type IRepositionAnnotationAction = IAction<annotationActionTypes.REPOSITION_ANNOTATION, {newPosition: INormalizedPosition}>;
type IUpdateAnnotationLabelAction = IAction<annotationActionTypes.UPDATE_ANNOTATION_LABEL, {newLabel: label}>;
type ISetSelectedAnnotationAction = IAction<annotationActionTypes.SET_SELECTED_ANNOTATION, {newId: string}>;
type IClearSelectedAnnotationAction = IAction<annotationActionTypes.CLEAR_SELECTED_ANNOTATION, undefined>;

export const addNewAnnotation = (label: label, position: INormalizedPosition, image: string): IAddNewAnnotationAction => {
	return {
		type: annotationActionTypes.ADD_ANNOTATION,
		data: {
			label: label,
			position: position,
			image: image
		}
	};
};

export const removeAnnotation = () : IRemoveAnnotationAction => {
	return {
		type: annotationActionTypes.REMOVE_ANNOTATION,
		data: undefined
	};
};

export const updateAnnotationLabel = (newLabel: label) : IUpdateAnnotationLabelAction => {
	return {
		type: annotationActionTypes.UPDATE_ANNOTATION_LABEL,
		data: {
			newLabel: newLabel
		}
	};
};

export const reposistionAnnotation = (newPosition: INormalizedPosition) : IRepositionAnnotationAction => {
	return {
		type: annotationActionTypes.REPOSITION_ANNOTATION,
		data: {
			newPosition: newPosition
		}
	};
};

export const setSelectedAnnotation = (newId: string) : ISetSelectedAnnotationAction => {
	return {
		type: annotationActionTypes.SET_SELECTED_ANNOTATION,
		data: {
			newId: newId
		}
	};
};

export const clearSelectedAnnotation = () :IClearSelectedAnnotationAction => {
	return {
		type: annotationActionTypes.CLEAR_SELECTED_ANNOTATION,
		data: undefined
	};
};

export type IAnnotationAction = IAddNewAnnotationAction  
	| IRemoveAnnotationAction
	| IRepositionAnnotationAction
	| IUpdateAnnotationLabelAction
	| ISetSelectedAnnotationAction
	| IClearSelectedAnnotationAction