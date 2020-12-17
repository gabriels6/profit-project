import styled from 'styled-components';
import {Card} from '../../components';

export const Main = styled.div`
    ${Card}
    width:38vw;
    padding-left:42px;
    min-height:500px;

    @media(max-width:${(props) => props.theme.limits.screenlimit}){
        margin:0;
        margin-top: 64px;
        width:90%;
    }
`;