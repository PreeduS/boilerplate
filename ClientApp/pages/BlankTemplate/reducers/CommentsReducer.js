import actionTypes from '../actionTypes';

const initialState = {
    comments:[]
}

const CommentsReducer =( state = initialState.comments, action) =>{

    switch(action.type) {
        case actionTypes.addComment:
            return[
                action.payload,
                ...state
            ];
            
        case actionTypes.loadComments + '_PENDING':
            return state;

        case actionTypes.loadComments + '_FULFILLED':
            return action.payload
  
 
            
    }
    return state;

}

export default CommentsReducer;