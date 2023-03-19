import { Actions, LOGIN  } from './actions';
import State from '../models/state';

export default function reducer(state: State, action: Actions): State {

    if (action.type === LOGIN) {
        let user = undefined;
        if (action.response && action.response.authenticated && action.response.user) {
            user = action.response.user;
        }
        return {
            ...state,
            loading: false,
            user
        }
    }
    return {...state};
}