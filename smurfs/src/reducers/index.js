import {
  GET_SMURFS,
  SMURFS_SUCCESS,
  SMURFS_FAILURE,
  ADD_SMURFS
} from "../actions";

/*
  Be sure to import in all of the action types from `../actions`
*/

//  Your initial/default state for this project could *Although does not have to* look a lot like this
export const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  error: ""
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SMURFS:
      return {
        ...state,
        error: "",
        fetchingSmurfs: true
      };
    case SMURFS_SUCCESS:
      console.log(action.payload, "data");
      return {
        ...state,
        smurfs: [...state.smurfs, ...action.payload],
        fetchingSmurfs: false
      };
    case SMURFS_FAILURE:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
