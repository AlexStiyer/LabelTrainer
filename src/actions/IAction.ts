import { Action } from "redux";
/**
 * Interface for defining redux actions and their state slices
 * @template T1 action type, recommeded to use specific enum value
 * @template T2 type definition of state slice. Use `Undefined` if you don't need a state slice. 
 * Reccomended to use a {key: value} definition even if only one parameter to make your reducers more declaritive.
 * @param type action to be dispatched
 * @param data updated state slice
 * @example IAction<LabelActionsEnum.EDIT_LABEL_NAME, {id : string, newName: string}
 */
export default interface IAction<T1,T2> extends Action{
    type: T1,
    data: T2
}