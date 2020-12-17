import styled from 'styled-components'
import {Title} from '../../components';


export const StockDetails = styled.div`
    box-shadow: 0px 2px 4px 3px rgba(0, 0, 0, 0.25);
    width:90vw;
    margin:32px 5vw;
    box-sizing:border-box;
    padding: 1px 32px ;
    
`;

export const StockSubTitle = styled.p`
    font-size:26px;

    @media(max-width:${(props) => props.theme.limits.screenlimit}){
        font-size:13px;
    }
`;

export const ExtraDetails = styled.div`
    width:100%;
    display:flex;
    flex-wrap:wrap;
    flex-direction:row;
    padding-top:25px;
    box-sizing:border-box;

    @media(max-width:${(props) => props.theme.limits.screenlimit}){
        padding:0;
        flex-direction:column
    
    }
`;

export const BusinessName = styled.div`
    display:flex;
    justify-content:space-between;
    width:100%;

`;

export const ExtraPart = styled.div`
    display:flex;
    flex-direction:column;
    width:30%;
    margin-bottom:32px;
`;

