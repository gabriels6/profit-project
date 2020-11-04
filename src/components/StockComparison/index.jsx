import React from 'react'
import {Main,ContentLine,TitleLine,StockTitle} from './styles'
import { removeStock } from '../../store/actions/stock' 
import { connect } from 'react-redux'
import {getDifference} from '../../utils'

const StockComparison = ({stocks,removeStock,lastSymbol,setLastSymbol,firstStock,setFirstStock}) => {

    function removeFromStocks(e){
        //console.log(e.target.id);
        removeStock(e.target.id)
        if(parseInt(e.target.id) === 0)
            setFirstStock(stocks.stocks[1]);
        setLastSymbol(lastSymbol.filter((value,index)=>{return index != e.target.id}))
        
        
    }



    return(
        <Main>
            <StockTitle>Comparação de ativos</StockTitle>
            <TitleLine>
                <div>Simbolo</div>
                <div>Retorno do Ativo em 12 meses</div>
                <div>Margem de Lucros</div>
                <div>Dividend Yield</div>
                <div>Dividendos por Ação</div>
                <div>Preço-Alvo</div>
            </TitleLine>
        {stocks.stocks.map((stock,index) => (
            <ContentLine id = {index} key={index} onClick={removeFromStocks}>
                <div id = {index}>{stock.Symbol}</div>
                <div id = {index}>{stock.RevenuePerShareTTM} {
                    getDifference(stock.RevenuePerShareTTM,firstStock.RevenuePerShareTTM)
                }</div>
                <div id = {index}>{stock.ProfitMargin} {
                    getDifference(stock.ProfitMargin,firstStock.ProfitMargin) 
                }</div>
                <div id = {index}>{stock.DividendYield} {
                    getDifference(stock.DividendYield,firstStock.DividendYield)
                }</div>
                <div id = {index}>{stock.DividendPerShare} {
                    getDifference(stock.DividendPerShare,firstStock.DividendPerShare)
                }</div>
                <div id = {index}>{stock.AnalystTargetPrice} {
                    getDifference(stock.AnalystTargetPrice,firstStock.AnalystTargetPrice)
                }</div>
            </ContentLine>
        ))}
            
        </Main>
    )
    
}


const mapStateToProps = (state) => ({
    stocks: state.stocks
})

export default connect(mapStateToProps,{ removeStock })(StockComparison);