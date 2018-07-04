const rateBox = document.querySelector("#rate"),
  roomRate = document.querySelector("#roomRate"),
  taxes = document.querySelector("#taxes"),
  total = document.querySelector("#total"),
  TAX_RATE = 1.15; // state 6.00% + county 9.00 = 15.00%

rateBox.addEventListener("input", updateResults);

function updateResults() {
  let totalAmt = parseFloat(Math.round(rateBox.value * 100) / 100).toFixed(2),
    tax = getTaxes(parseFloat(totalAmt)),
    rate = getRate(parseFloat(totalAmt));

  roomRate.value = rate;
  taxes.value = tax;
  total.value = totalAmt;
}

function getTaxes(total) {
  return (parseFloat(total) - parseFloat(getRate(total))).toFixed(2);
}

function getRate(total) {
  return parseFloat(total / TAX_RATE).toFixed(2);
}
