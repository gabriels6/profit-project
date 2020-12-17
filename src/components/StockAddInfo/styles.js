import styled from 'styled-components';

export const Main = styled.div`

    width:90vw;
    margin:32px 5vw;
    box-sizing:border-box;

    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;

    @media(max-width:${(props) => props.theme.limits.screenlimit}){
        padding:0;
        flex-direction:column;
        align-items:center;
        justify-content:center;
    }
`;