var exchangerates = {
    INR : { USD : 0.012, EUR : 0.011},
    USD : { INR : 83.29, EUR : 0.95},
    EUR : { INR : 87.71, USD : 1.06}
}

function convert(){ 
var from = document.getElementById('from').value;
var to = document.getElementById('to').value;
var amount = document.getElementById('amount').value;

convrtamount = amount * exchangerates[from][to];
document.getElementById('result').innerHTML = `${amount} ${from} = ${convrtamount} ${to}`;
}