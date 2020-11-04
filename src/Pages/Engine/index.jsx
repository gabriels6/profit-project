import React, {useState,useEffect} from 'react';
import axios from 'axios'

//Alpha API Key = K38Q27JQS8XK8BHK

import {Main,MainTitle,Text,FloatingAddButton,Snippet} from './styles.js';
import {StockPart,StockComparison} from '../../components'

import {connect} from 'react-redux'
import { addStock } from '../../store/actions/stock'

const Engine = ({addStock}) =>{

    const [stockUrl,setStockUrl] = useState('');
    const [stock,setStock] = useState({});
    const [onFab,setOnFab] = useState(false);
    const [lastSymbol,setLastSymbol] = useState([]);
    const [firstStock,setFirstStock] = useState({});

    async function addValue(Symbol){
        let connection = axios.create();

        let value = await connection.get('https://www.alphavantage.co/query?function=OVERVIEW&symbol='+Symbol+'&apikey='+process.env.REACT_APP_ALPHA_ADVANTAGE_API_KEY);
        

        setStock(value.data)
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
            <Main>
                <MainTitle>Busca do Ativo</MainTitle>
                <p>Digite o símbolo do ativo para receber informações sobre ele</p>
                <p>(Apenas símbolos de empresas da bolsa dos EUA aceitos)</p>
                <Text placeholder = {'Codigo do Ativo...'} onKeyDown={({key,target}) => {
                    if(key == 'Enter'){
                        //setStock(target.value);
                        addValue(target.value);
                    }
                }}/>
            </Main>
                {(function openStock(){
                    if(stock.Symbol !== undefined){
                        return(
                            <>
                                <StockPart stock={stock} />
                                <StockComparison lastSymbol={lastSymbol} setLastSymbol={setLastSymbol} firstStock={firstStock} setFirstStock={setFirstStock}/>
                                <FloatingAddButton onClick={addToComparison} onMouseOut={() => {setOnFab(false)}} onMouseOver={()=>{setOnFab(true)}}>+</FloatingAddButton>
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