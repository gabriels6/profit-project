import React from 'react'
import {StockDetails,StockTitle,BusinessName,StockSubTitle,ExtraPart,ExtraSubtitle,ExtraDetails} from './styles'

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
                            <ExtraSubtitle>Retorno por ativo em 12 mêses</ExtraSubtitle>
                                {stock.RevenuePerShareTTM}
                            </ExtraPart>
                            <ExtraPart>
                            <ExtraSubtitle>Margem de lucros</ExtraSubtitle>
                                {stock.ProfitMargin}
                            </ExtraPart>
                            <ExtraPart>
                            <ExtraSubtitle>Lucro Bruto em 12 Mêses</ExtraSubtitle>
                                {stock.GrossProfitTTM}
                            </ExtraPart>
                            <ExtraPart>
                                <ExtraSubtitle>Dividendos por ação</ExtraSubtitle>
                                {stock.DividendPerShare}
                            </ExtraPart>
                            <ExtraPart>
                                <ExtraSubtitle>Dividend Yield</ExtraSubtitle>
                                {stock.DividendYield}
                            </ExtraPart>
                            <ExtraPart>
                                <ExtraSubtitle>Preço-Alvo</ExtraSubtitle>
                                {stock.AnalystTargetPrice}
                            </ExtraPart>
                        </ExtraDetails>
                    </StockDetails>
    )
}

export default StockControl;