export function addStock({Symbol,RevenuePerShareTTM,ProfitMargin,GrossProfitTTM,DividendPerShare,DividendYield,AnalystTargetPrice}){
    return{
        type: 'ADD_STOCK',
        payload: {
            Symbol,
            RevenuePerShareTTM,
            ProfitMargin,
            GrossProfitTTM,
            DividendPerShare,
            DividendYield,
            AnalystTargetPrice
        }
    }
}

export function removeStock(index){
    return{
        type: 'REMOVE_STOCK',
        payload: {
            index
        }
    }
}