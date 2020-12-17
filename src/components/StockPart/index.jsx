import React from 'react'
import {StockDetails,BusinessName,ExtraPart,ExtraDetails} from './styles'
import {StockTitle,StockSubTitle,ExtraSubTitle} from '../../components';

const StockControl = ({stock}) => {
    
    return(
        <StockDetails>
                <StockTitle>Sobre o Ativo</StockTitle>
                <BusinessName><StockSubTitle>{stock.Symbol}</StockSubTitle><StockSubTitle>{stock.Sector}</StockSubTitle></BusinessName>
                <StockSubTitle>{stock.Name}</StockSubTitle>
                    <p>{stock.Description}</p>
                    <p>{stock.Address}</p>
                    <p>{stock.Country}</p>
                    <ExtraDetails>
                        <ExtraPart>
                            <ExtraSubTitle>Retorno por ativo em 12 mêses</ExtraSubTitle>
                                {stock.RevenuePerShareTTM}
                            </ExtraPart>
                            <ExtraPart>
                            <ExtraSubTitle>Margem de lucros</ExtraSubTitle>
                                {stock.ProfitMargin}
                            </ExtraPart>
                            <ExtraPart>
                            <ExtraSubTitle>Lucro Bruto em 12 Mêses</ExtraSubTitle>
                                {stock.GrossProfitTTM}
                            </ExtraPart>
                            <ExtraPart>
                                <ExtraSubTitle>Dividendos por ação</ExtraSubTitle>
                                {stock.DividendPerShare}
                            </ExtraPart>
                            <ExtraPart>
                                <ExtraSubTitle>Dividend Yield</ExtraSubTitle>
                                {stock.DividendYield}
                            </ExtraPart>
                            <ExtraPart>
                                <ExtraSubTitle>Preço-Alvo</ExtraSubTitle>
                                {stock.AnalystTargetPrice}
                            </ExtraPart>
                        </ExtraDetails>
            </StockDetails>
    )
}

export default StockControl;