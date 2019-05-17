import {FETCH_SMURFS_START, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_FAILURE, ADD_SMURF } from '../actions';

//  Your initial/default state for this project could *Although does not have to* look a lot like this
const initialState =  {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: ''
 }

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

const rootReducer = (state = initialState, action) => {
    switch(action.type){
      case FETCH_SMURFS_START:
      return{
        ...state,
        fetchingSmurfs: true,
        error: ''
      }
      
      case FETCH_SMURFS_SUCCESS:
      return{
        ...state,
        fetchingSmurfs: false,
        smurfs: action.payload
      }

      case FETCH_SMURFS_FAILURE:
      return{
        ...state,
        error: 'what'
      }

      case ADD_SMURF:
      return{
        smurfs: action.payload
      }

      default:
      return state;
    }
}

export default rootReducer;

