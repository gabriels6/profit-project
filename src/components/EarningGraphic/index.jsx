import React,{useState,useEffect} from 'react';
import {Main} from './styles';
import {StockTitle,Button} from '../../components';
import {BarChart,XAxis,YAxis,CartesianGrid,Bar,Tooltip} from 'recharts';
import axios from 'axios';
const EarningGraphic = ({symbol}) => {

    const [Earnings,setEarnings] = useState([]);


    async function handleEarnings(){

            if(symbol !== undefined){
                let connection = axios.create();

                let values = await connection.get('https://www.alphavantage.co/query?function=EARNINGS&symbol='+symbol+'&apikey='+process.env.REACT_APP_ALPHA_ADVANTAGE_API_KEY);
        
                setEarnings(values.data.annualEarnings.reverse());;
            }
    }

    return(
        <Main>
            <StockTitle>Lucros</StockTitle>
            <BarChart width={1000} height={500} data={Earnings}>
                <XAxis dataKey="fiscalDateEnding"/>
                <YAxis/>
                <Tooltip/>
                <CartesianGrid stroke="#eee" strokeDasharray="4 4"/>
                <Bar type="monotone" dataKey="reportedEPS" stroke="#8884d8" />
                
            </BarChart>
            <Button onClick={handleEarnings}>Criar gráfico</Button>
        </Main>
    )
}

export default EarningGraphic;