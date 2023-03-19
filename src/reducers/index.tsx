import { Reducer } from "redux";

import State from '../models/state';

import { Actions } from './actions';
import reducer from './reducer';


export type ActionTypes = Actions;

const combineReducers: Reducer<State> = (state: State = { jobPosts: [], loading: false}, action: ActionTypes): State => {

    if (action as Actions !== undefined) {
        return reducer(state, action);
    }

    return {...state};
}

export default combineReducers;