/**
 * Redux Action With Defined Data
 * @param T1 action type emnum 
 * @param T2 type definition of state slice
 * @member type: action to be dispatched
 * @member data: updated state slice
 */
export default interface IAction<T1,T2>{
    type: T1,
    data: T2
}