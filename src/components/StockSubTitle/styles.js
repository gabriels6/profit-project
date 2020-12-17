import styled from 'styled-components';

export const Main = styled.p`
    font-size:26px;

    @media(max-width:${(props) => props.theme.limits.screenlimit}){
        font-size:13px;
    }
`;