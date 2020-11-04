import React from 'react'

import styled from 'styled-components';


export const BackgroundIntro = styled.div`
    background:url('../../../officebackground.png');
    background-size:cover;
    width:100%;
    height:680px;
`;

export const Info = styled.div`
    height:729px;
    width:40%;
    box-sizing:border-box;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin:auto;

    @media(max-width:900px){
        width: 60%;
    }


    @media(max-width:600px){
        width: 80%;
    }

    @media(max-width:400px){
        margin-top:25%;
        width: 95%;
    }
`;

export const Subtitle = styled.h1`
    font-family:${(props) => props.theme.fonts.title},'Verdana';
    font-size:18;
    margin-top:32px;
    margin-bottom:32px;
`;

export const Content = styled.p`
    font-family:${(props) => props.theme.fonts.regular},'Arial';
    font-size:14;
    margin-bottom:72px;
    text-align:justify;
`;

export const Creator = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

export const Line = styled.hr`
    width:256px;
    background:black;
`;

export const BenefitsWrapper = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin-top:30px;
    margin-bottom:30px;
`;

export const BenefitsContainer = styled.div`
    width:100%;
    box-sizing:border-box;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    margin:15px 25px;
    padding:0px 67px;

    @media(max-width:1096px){
        flex-direction:column;
        justify-content:center;
        align-items:center;
        margin:25px 25px;
    }
`;

export const Card = styled.div`
    background:${(props) => props.theme.colors.secondary};
    font-weight:200;
    color:${(props) => props.theme.colors.primary};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    width:301px;
    height:283px;
    box-sizing:border-box;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    padding: 40px;
    padding-top:7%;

    @media(max-width:1096px){
        width:100%;
        margin-top:50px;
    }

    @media(max-width:520px){
        padding-top:25%;
        width: 90%;
        font-size:10px;
    }

    
`;

export const CardTitle = styled(Subtitle)`
    text-align:center;
    font-size:20px;
    `;
