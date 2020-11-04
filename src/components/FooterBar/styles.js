import React from 'react'
import styled from 'styled-components'



export const About = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    width:250px;
`;

export const CreatorInfo = styled(About)`
    width:200px;
`;

export const Footer = styled.div`
    background:${(props) => props.theme.colors.footer};
    color:${(props) => props.theme.colors.footertext};
    height:48px;
    display:flex;
    align-items:center;
    padding-left:32px;
`;

export const Info = styled.div`
    width:100%;
    height:292px;
    background:${(props) => props.theme.colors.secondary};
    padding:0 227px;
    box-sizing:border-box;
    color:white;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;

    @media(max-width:1000px){
        padding:0;
        flex-direction:column;
        width:100%;
        height:800px;
        align-items:center;
        justify-content:center;
    }
`;

export const Subtitle = styled.div`
    color:${(props) => props.theme.colors.primary};
    font-family:${(props) => props.theme.fonts.title},'Verdana';
    font-size:18;
    display:flex;
    justify-content:space-between;
`;

export const Line = styled.hr`
    width:266px;
`;

export const Link = styled.a`
    color:${(props) => props.theme.colors.primary};
    text-decoration:none;
    &:hover {
        color:${(props) => props.theme.colors.footertext};
        transition:color .5s;
    }
`;