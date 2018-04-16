import React from 'react';
import * as styles from '../styles/CommentTextArea';

class CommentTextArea extends React.Component {
    constructor(){
        super();
        this.state = {
            textarea: ''
        }
    }

    resizeTextarea(el){
        let elem = el.target;
        elem.style.height = 'auto';
        elem.style.height = elem.scrollHeight;
    }
    updateTextAreaValue(el){
        let value = el.target.value;
        this.setState({
            textarea:value
        });
    }


    render() {

        const label = 'Add Comment';
     

        return (           
            <styles.CommentTextAreaWrapper>
                <textarea 
                    onChange = {e=> {this.resizeTextarea(e); this.updateTextAreaValue(e);} }  
                    value = {this.state.textarea}> 
                </textarea>
                <br />
                <button>{label}</button>
            </styles.CommentTextAreaWrapper>
        );
    }
}

export default CommentTextArea;
