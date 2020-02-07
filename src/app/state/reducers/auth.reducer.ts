import { User } from '../../shared/models/user';
import { AuthActionTypes, All } from '../actions/auth.actions';


export interface State {
  isAuthenticated: boolean;
  user: User | null;
  errorMessage: string | null;
}
export const initialState: State = {
  isAuthenticated: false,
  user: null,
  errorMessage: ''
};

export function reducer(state = initialState, action: All): State {
  switch (action.type) {
    case AuthActionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        errorMessage: null
      };
    }
    case AuthActionTypes.LOGIN_FAILURE: {
      return {
        ...state,
        errorMessage: 'Incorrect email and/or password.'
      };
    }
    default: {
      return state;
    }
  }
}