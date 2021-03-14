import { v4 as uuidv4 } from "uuid";
import { label } from "./Label";

export interface INormalizedPosition{
	xMin: number;
	xMax: number;
	yMin: number;
	yMax: number;
}
/**
 * Defines an image annotation with position data.
 * @property id: uuid string
 * @property label: label the annotation is defining
 * @property position: position of annotation normalized to image width and height
 * @property image: image annotation belongs to
 */
export class Annotation{
	id: string;
	label: label;
	position: INormalizedPosition;
	image: string;

	constructor(label: label, position: INormalizedPosition, image: string){
		this.id = uuidv4();
		this.label = label;
		this.position = position;
		this.image= image;
	}
}

/**
 * App level state for Annotations
 */
export interface IAnnotationState {
	annotations : Annotation[],
	selectedAnnotation?: string;
}
