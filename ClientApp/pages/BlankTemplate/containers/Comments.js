import React from 'react';
import {connect} from 'react-redux';

//reducers
import CommentsReducer from '../reducers/CommentsReducer';

//actions
import {loadComments, addComment } from '../actions';

//components
import Comment from '../components/Comment';
import CommentTextArea from '../components/CommentTextArea';

import * as styles from '../styles/Comments.js';

class Comments extends React.Component {
    constructor(){
        super();

    }
    componentDidMount(){
        this.props.loadComments(); 
    }

    render() {
        const {comments} = this.props;
       
        return (
            <styles.CommentsWrapper> 
                <CommentTextArea /><br />

                {comments && comments.map( c => 
                    <Comment key = {c.id}  comment = {c}> </Comment> 
                )}

            </styles.CommentsWrapper>
        );

    }
}



const mapStateToProps = state =>( {
    comments: state.CommentsReducer
});
const mapDispatchToProps = dispatch => ({
    loadComments:() =>
        dispatch(()=> loadComments()(dispatch))
    ,    
    addComment: comment =>
        dispatch(addComment(comment))

});


export default connect(mapStateToProps, mapDispatchToProps)(Comments);