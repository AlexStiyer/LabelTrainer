import { v4 as uuidv4 } from "uuid";

export class label {
	id: string;
	name: string;
	color: string;
	key: string;
	
	constructor(name: string, color: string, key: string){
		this.id =  uuidv4();
		this.name = name;
		this.color = color;
		this.key = key;
	}
}

/**
 * App level state for labels
 */
export interface IlabelState {
	labels: label[];
	isEditing: boolean;
	selectedLabel?: string;
} 