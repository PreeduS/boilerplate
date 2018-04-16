import React from 'react';
import Comments from './containers/Comments';
import * as styles from './styles';


class BlankTemplate extends React.Component {
    
    render() {
  
//console.log('jquery:', jQuery)
//console.log('jquery:', $zzz)
        return (
            <styles.BlankTempateWrapper>
           
                <Comments />
            </styles.BlankTempateWrapper>
        );
    }
}

export default BlankTemplate;
