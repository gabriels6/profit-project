import styled from 'styled-components';


export const Main = styled.p`
    font-family:'Staatliches';
    font-size:48px;

    @media(max-width:${(props) => props.theme.limits.screenlimit}){
        font-size:24px;
    }
`;