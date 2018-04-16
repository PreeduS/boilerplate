import actionTypes from '../actionTypes'
import axios from 'Axios';


export const loadComments = () => dispatch =>{
    dispatch({
        type: actionTypes.loadComments + '_FULFILLED',
        payload: [
            {id:1,content:'content 1', userId: 1 },
            {id:2,content:'content 2', userId: 2 }
        ] 
    }); 
    return; //----------

    dispatch( {type: actionTypes.loadComments + '_PENDING'} );

    axios.get('/api/thread/getall').then( result =>{           
        dispatch({
            type: actionTypes.loadComments + '_FULFILLED',
            payload: result.data 
        });

    }).catch( error => 
       dispatch( {type: actionTypes.loadComments + '_REJECTED'} )
    );

};

export const addComment = comment =>({
    type: actionTypes.addComment,
    payload: comment
});
