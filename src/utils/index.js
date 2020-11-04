import React from 'react';

export function getDifference(value1, value2){

    

    let Difference = parseFloat(value1) - parseFloat(value2);

    if(value1 === 'None' || value2 === 'None'){
        return null;
    }

    if(Difference !== 0.0){
        if(Difference > 0.0){
            return '(+'+Difference.toFixed(2)+')';
        }   
        else return '('+Difference.toFixed(2)+')';
    }else return null;
}

