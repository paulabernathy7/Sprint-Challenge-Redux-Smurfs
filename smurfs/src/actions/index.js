import axios from "axios";

export const GET_SMURFS = "GET_SMURFS";
export const SMURFS_SUCCESS = "SMURFS_SUCCESS";
export const SMURFS_FAILURE = "SMURFS_FAILURE";
export const ADD_SMURFS = "ADD_SMURFS";

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const fetchData = () => dispatch => {
  dispatch({ type: GET_SMURFS });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      console.log(res, "res");
      dispatch({
        type: SMURFS_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: SMURFS_FAILURE,
        payload: err
      });
    });
};
