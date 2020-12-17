import React, {useState,useEffect} from 'react';
import axios from 'axios';

import {Main,StockMain,MainTitle,Text,FloatingAddButton,Snippet} from './styles.js';
import {StockPart,StockComparison,StockAddInfo,InfoCard,StockTitle,StockSubTitle,ExtraSubTitle,InfoSection,EarningGraphic} from '../../components'

import {connect} from 'react-redux'
import { addStock } from '../../store/actions/stock'

const Engine = ({addStock}) =>{

    let connection = axios.create({baseURL:'https://www.alphavantage.co'});

    const [stockUrl,setStockUrl] = useState('');
    const [stock,setStock] = useState({});
    const [balance,setBalance] = useState({});
    const [onFab,setOnFab] = useState(false);
    const [lastSymbol,setLastSymbol] = useState([]);
    const [firstStock,setFirstStock] = useState({});

    async function addValue(Symbol){

        let value = await connection.get('/query?function=OVERVIEW&symbol='+Symbol+'&apikey='+process.env.REACT_APP_ALPHA_ADVANTAGE_API_KEY);

        setStock(value.data);

        //addBalance(Symbol);
        
    }



    async function addBalance(Symbol){

            let stockBalance = await connection.get('/query?function=BALANCE_SHEET&symbol='+Symbol+'&apikey='+process.env.REACT_APP_ALPHA_ADVANTAGE_API_KEY);

            setBalance(stockBalance.data);
            
                
    }

    function addToComparison(){
        if(stock.Symbol !== undefined && !lastSymbol.includes(stock.Symbol)){
            if(firstStock.Symbol === undefined){
                setFirstStock(stock);
            }

            addStock(stock);
            setLastSymbol([...lastSymbol,stock.Symbol])

        }
            
    }
    
    
    return(
        <>
            <StockMain>
                <MainTitle>Busca do Ativo</MainTitle>
                <p>Digite o símbolo do ativo para receber informações sobre ele</p>
                <p>(Apenas símbolos de empresas da bolsa dos EUA aceitos)</p>
                <Text placeholder = {'Codigo do Ativo...'} onKeyDown={({key,target}) => {
                    if(key == 'Enter'){
                        //setStock(target.value);
                        addValue(target.value);
                    }
                }}/>
            </StockMain>
                {(function openStock(){
                    if(stock.Symbol !== undefined){
                        
                        return(
                            <>
                                <StockPart stock={stock} />
                                <StockComparison lastSymbol={lastSymbol} setLastSymbol={setLastSymbol} firstStock={firstStock} setFirstStock={setFirstStock}/>
                                <FloatingAddButton onClick={addToComparison} onMouseOut={() => {setOnFab(false)}} onMouseOver={()=>{setOnFab(true)}}>+</FloatingAddButton>
                                <EarningGraphic symbol={stock.Symbol}/>
                                {(function openSnippet(){
                                    if(onFab === true){
                                        return(<Snippet><i class="fas fa-info"></i> Add Stock to Comparison</Snippet>);
                                    }else{
                                        return(<></>);
                                    }
                                })()}
                            </>
                            )
                    }else{
                        return(<></>)
                    }
                    
                })()}
                
        </>
    )
}


const mapStateToProps = (state) => ({
    stocks: state.stocks
})

export default connect(
    mapStateToProps,
    { addStock}
)(Engine);