import styled from 'styled-components';
import imgPath from '~/commons/images/wp-styled.png';

export const FileLoaderWrapper = styled.div`
    border:1px solid gray;
    width:100%;
    min-height:400px;

`;
export const BgImage = styled.div`
    border:1px solid gray;
    width:200px;
    height:150px;
    background:url(${imgPath});
    background-repeat: repeat;
    background-position: 0px 0px;     
    background-size:contain; 

`;