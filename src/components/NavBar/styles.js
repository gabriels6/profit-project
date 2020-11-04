import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Nav = styled.div`
    display:flex;
    flex-direction:row;
    background-color: ${(props) => props.theme.colors.footer};
    height:70px;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    font-family:${(props) => props.theme.fonts.title};
    box-sizing:border-box; 
    padding: 0 2px;
    

    @media(max-width:${(props) => props.theme.limits.screenlimit}){
        height:100px;
        padding:0;
        flex-direction:column;
        width:device-width;
        align-items:center;
        justify-content:center;
    }
`;

export const Logo = styled.div`
    color:${(props) => props.theme.colors.primary};
    font-size:32px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    width:105px;

    @media(max-width:${(props) => props.theme.limits.screenlimit}){
        flex-direction:column;
        padding:0;
        align-items:center;
        justify-content:center;
    }
`;

export const Navigation = styled.nav`  
    width:10%;
    display:flex;
    justify-content:space-between;
    padding:0 45px;
    @media(max-width:${(props) => props.theme.limits.screenlimit}){
        padding:0;
        width:60%;
        
    }

    
    `;

export const NavItem = styled(Link)`
    color:${(props) => props.theme.colors.primary};
    text-decoration:none;
    font-size:18px;
    &:hover {
        color:${(props) => props.theme.colors.footertext};
        transition:color .5s;
    }

    @media(max-width:300px){
        padding:0;
        width:60%;
        font-size:11px;
    }
`;