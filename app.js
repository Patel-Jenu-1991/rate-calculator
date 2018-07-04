
const rateBox = document.querySelector("#rate"),
      roomRate = document.querySelector("#roomRate"),
      taxes = document.querySelector("#taxes"),
      total = document.querySelector("#total"),
      TAX_RATE = 0.1304;

rateBox.addEventListener("change", () => {
  let totalAmt = parseFloat(Math.round(rateBox.value * 100) / 100).toFixed(2),
      tax = getTaxes(totalAmt),
      rate = getRate(totalAmt, tax);

  roomRate.value = rate;
  taxes.value = tax;
  total.value = totalAmt;
});

function getTaxes(total) {
  return parseFloat(Math.round(total * TAX_RATE * 100) / 100).toFixed(2);
}

function getRate(total, taxes) {
  const rate = parseFloat(Math.round((total - (total * TAX_RATE)) * 100) / 100).toFixed(2);
  return rate;
}
