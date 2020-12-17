import React from 'react';
import styled from 'styled-components';

export const StockMain = styled.div`
    width:100%;
    min-height:600px;
    background:white;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

export const Main = styled.div`
width:100%;
display:flex;
flex-direction:column;
flex-align:center;
justify-content:center;
`;

const Card = `
    box-shadow: 0px 2px 4px 3px rgba(0, 0, 0, 0.25);
`;

const Title = `
    
    font-family:'Staatliches';
`;

export const MainTitle = styled.p`
    ${Title}
    font-size:48px;
`;

export const FloatingAddButton = styled.button`
    position:fixed;
    min-width:50px;
    height:50px;
    bottom:64px;
    right:64px;
    background:#222222;
    color:#EEEEEE;
    border-radius: 50%;
    border:none;
    font-size:18px;
    
`;

export const Snippet = styled.div`
    width:250px;
    height:50px;
    padding-left:25px;
    padding-right:25px;
    background:#50bf6e;
    color:white;
    position:fixed;
    bottom:128px;
    right:64px;
    border-radius:25px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    box-sizing:border-box;
`;

export const Text = styled.input`
    ${Card}
    width:565px;
    height:64px;
    background:${(props) => props.theme.colors.primary};   
    border:none;
    margin: 32px 0;
    padding:0 12px;
    box-sizing:border-box;

    @media(max-width:${(props) => props.theme.limits.screenlimit}){
        width:90%;
    }
`;



export const ButtonSearch = styled.button`
    width:200px;
    height:42px;
    border:none;
    background:${(props) => props.theme.colors.secondary};
    color:${(props) => props.theme.colors.primary};
    font-size:18px;

    :hover{
        color:${(props) => props.theme.colors.secondary};
        background:${(props) => props.theme.colors.primary};
        border:solid 2px black;
        transition: all 0.5s;
    }
`;
