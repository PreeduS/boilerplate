import React from 'react';
import * as styles from './styles';
import stylesSCSS from './styles/styles.scss';
import stylesCSS from './styles/styles.css';


class FileLoader extends React.Component {
    constructor(){
        super();
        this.state={
            counter:0
        }
        this.counterInc = this.counterInc.bind(this);
    }
    counterInc(){
        this.setState({
            counter: this.state.counter+1
        })
    }
    render() {
        const reloadTest = 'test';
        return (
            <styles.FileLoaderWrapper>
                <b onClick = {this.counterInc}> inc </b> {this.state.counter} <br />

                reloadTest = {reloadTest} <br />

                BgImage styled:<br />
                <styles.BgImage />
               
                BgImage scss:<br />
                <div className = {stylesSCSS.bgImage}></div>

                BgImage css:<br />
                <div className = {stylesCSS.bgImage}></div>
               
                
            </styles.FileLoaderWrapper>
        );
    }
}

export default FileLoader;
