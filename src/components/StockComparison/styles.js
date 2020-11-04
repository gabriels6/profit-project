import React from 'react'
import styled from 'styled-components'


const Media = `
    @media(max-width:600px){
        padding:0px;
        margin:0px;
        font-size:11px;
        margin-bottom:10px;
    }
`;

const Card = `
    box-shadow: 0px 2px 4px 3px rgba(0, 0, 0, 0.25);
`;

const Title = `  
    font-family:'Staatliches';
`;

export const Main = styled.div`
    ${Card}
    width:90vw;
    margin:32px 5vw;
    box-sizing:border-box;
    padding: 1px 32px ;
    
`;



const Line = `
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin:10px;
    font-size:16px;
    div{
        text-align:center;
        width:80px;
        display:flex;
        flex-direction:column;
    }
`;

export const TitleLine = styled.div`
    ${Line}
    font-family:${(props) => props.theme.fonts.title};
    padding:0px 10px;
    
    ${Media}
`;

export const ContentLine = styled.div`
    ${Line}
    padding:0px 10px;
    box-sizing:border-box;
    height:50px;
    border-radius: 5px;
    :hover{
        background:#f55345;
        color:white;
        transition: all .5s;
    }
    
    ${Media}
`;

export const StockTitle = styled.p`
    ${Title}
    font-size:48px;
    box-sizing:border-box;
    height:96px;
    @media(max-width:${(props) => props.theme.limits.screenlimit}){
        font-size:24px;
    }
`;