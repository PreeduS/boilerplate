import React from 'react';

import * as styles from '../styles/Comment.js';


class Comment extends React.Component {
  
    render(){
        var {content, userId } = this.props.comment;

        return(
            <div>
                <div>User:{userId}</div>
                <div>{content}</div>
            </div>
        );
     
  

    }

}


export default Comment;
//export default connect(mapStateToProps, mapDispatchToProps)(Comment);