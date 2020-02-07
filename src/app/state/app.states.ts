import * as auth from './reducers/auth.reducer';
import { ActionReducerMap } from '@ngrx/store';


export interface AppState {
    authState: auth.State;
}
