import { GET_SMURF, SMURF_SUCCESS, ADD_SMURF } from "../actions";

/*
  Be sure to import in all of the action types from `../actions`
*/

//  Your initial/default state for this project could *Although does not have to* look a lot like this
const initialState = {
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
    case GET_SMURF:
      return {
        ...state,
        fetchingSmurfs: true
      };
    case SMURF_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        smurfs: [...state.smurfs, ...action.payload],
        fetchingSmurfs: false
      };
  }
};

export default reducer;
