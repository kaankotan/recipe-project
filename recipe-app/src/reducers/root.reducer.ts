import { ApplicationState } from '../interfaces/state';
import { StateAction } from '../interfaces/stateAction';


import { userModeReducer } from './user-mode.reducer';


// A root-level reducer to capture all dispatched actions within the application
export default function rootReducer(state: ApplicationState, action: StateAction): ApplicationState {
    const { userMode } = state;

    return {
        userMode: userModeReducer(userMode, action)
    }
}