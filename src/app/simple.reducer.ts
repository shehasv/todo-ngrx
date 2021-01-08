import * as TutoralActions from './simple.action'
import { Todo } from './todo.model'



const initialState: Todo = {
    task: 'Cooking',
    text: 'cook dinner'
}

export function simpleReducer(
    state: Todo[] = [initialState],
    action: TutoralActions.Actions
){

    switch(action.type){
        case TutoralActions.ADD:
            return [...state,action.payload];
        case TutoralActions.REMOVE:
            state.splice(action.payload,1)
            return state
        default:
            return state
    

        }

}