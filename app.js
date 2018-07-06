// Attach event listener to update the resultBox on input with
// computed room rate, taxes and total
rateBox.addEventListener("input", () => updateResults());

/*
 * @description Updates the resultBox, event handler for the rate box
 */
const updateResults = () => {
  let dom = getDOM();
  (totalAmt = Number(Math.round(dom.rateBox.value * 100) / 100).toFixed(2)),
    (tax = getTaxes(totalAmt)),
    (rate = getRate(totalAmt));

  dom.roomRate.value = rate;
  dom.taxes.value = tax;
  dom.total.value = totalAmt;
};

/*
 * @description Computes the room rate by deducting taxes from the total
 * @param {number} total
 * @returns {string} The room rate rounded off to 2 decimal places
 */
const getTaxes = total => {
  return (Number(total) - Number(getRate(total))).toFixed(2);
};

/*
 * @description Computes the taxes
 * @param {number} total
 * @returns {string} The taxes rounded off to 2 decimal places
 */
const getRate = total => {
  const TAX_RATE = 1.15; // state 6.00% + county 9.00 = 15.00%
  return Number(total / TAX_RATE).toFixed(2);
};

/*
 * @description Selects all the DOM elements to work with
 * @returns {object} An object containing all the DOM elements
 */
const getDOM = () => {
  const rateInput = document.querySelector("#rate"),
    roomRateInput = document.querySelector("#roomRate"),
    taxBox = document.querySelector("#taxes"),
    totalBox = document.querySelector("#total");

  return {
    rateBox: rateInput,
    roomRate: roomRateInput,
    taxes: taxBox,
    total: totalBox
  };
};
