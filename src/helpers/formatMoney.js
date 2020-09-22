const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'});
function formatMoney(value){
    value = isNaN(value) ? value : Math.round(value)
    return formatter.format(value).split('.')[0];
}
export default formatMoney;