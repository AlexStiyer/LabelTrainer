export interface label {
    id: number;
    name: string;
    color: string;
    key: string;
}

/**
 * App level state for labels
 */
export interface IlabelState {
    labels: label[];
    isEditing: boolean;
    selectedLabel?: number;
} 