import React from 'react';
import formatMoney from './formatMoney';
function formatDelta(delta){
    return delta ? <span className="text-warning">(Δ= {formatMoney(delta)})</span> : "";
}
export default formatDelta;