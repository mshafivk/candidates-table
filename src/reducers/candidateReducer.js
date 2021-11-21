import { SET_CANDIDATES, SET_ERROR_STATE, LOAD_CANDIDATES } from './actions';
export const initialState = {
  candidates: [],
  loading: false,
  error: null,
};

export const candidateReducer = (state, action) => {
  switch (action.type) {
    case LOAD_CANDIDATES:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SET_CANDIDATES:
      return {
        ...state,
        candidates: action.payload,
        loading: false,
        error: null,
      };
    case SET_ERROR_STATE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
