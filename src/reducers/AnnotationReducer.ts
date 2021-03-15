import {IAnnotationState, Annotation} from "../shared/models/Annotation";
import {IAnnotationAction, annotationActionTypes} from "../actions/AnnotationActions";

const intitialState: IAnnotationState = {
	annotations : [],
	selectedAnnotation: undefined
};

export const annotationReducer = (state = intitialState, action : IAnnotationAction) : IAnnotationState => {
	switch(action.type){
	case annotationActionTypes.ADD_ANNOTATION:
		// eslint-disable-next-line no-case-declarations
		const newAnnotation = new Annotation(action.data.label, action.data.position, action.data.image);
		return {
			...state,
			annotations: [...state.annotations, newAnnotation],
			selectedAnnotation: newAnnotation.id
		};

	case annotationActionTypes.SET_SELECTED_ANNOTATION:
		return {
			...state,
			selectedAnnotation: action.data.newId
		};

	case annotationActionTypes.CLEAR_SELECTED_ANNOTATION:
		return {
			...state,
			selectedAnnotation: undefined
		};

	case annotationActionTypes.REMOVE_ANNOTATION:
		return {
			...state,
			annotations: state.annotations.filter(x => x.id != state.selectedAnnotation)
		};

	case annotationActionTypes.REPOSITION_ANNOTATION:
		return {
			...state,
			annotations: state.annotations.map(x => {
				if(x.id == state.selectedAnnotation){
					x.position = action.data.newPosition;
				}
				return x;
			})
		};

	case annotationActionTypes.UPDATE_ANNOTATION_LABEL:
		return {
			...state,
			annotations: state.annotations.map(x => {
				if(x.id == state.selectedAnnotation){
					x.label = action.data.newLabel;
				}
				return x;
			})
		};

	default:
		return state;
	}
};