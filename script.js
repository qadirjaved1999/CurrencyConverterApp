const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";
console.log(BASE_URL)

const dropdowns = document.querySelectorAll(".dropdown select");
console.log("====>>>> Select Here => ", dropdowns);
const btn = document.querySelector("form button");
console.log("Form Button => ", btn);
const fromCurrency = document.querySelector(".from select");
// console.log("fromCurrency => ", fromCurrency);
const toCurrency = document.querySelector(".to select");
// console.log("toCurrency => ", toCurrency);

// Add Select Option for every country
for (let select of dropdowns) {
    // Get Country List
    for (let currencyCode in countryList) {
        // console.log(currencyCode + " => " + countryList[currencyCode]);
        let newOption = document.createElement("Option");
        // console.log(newOption);
        newOption.innerText = currencyCode;
        newOption.value = currencyCode;
        // console.log(newOption);
        if (select.name === "from" && currencyCode === "USD") {
            newOption.selected = "selected"
        } else if (select.name === "to" && currencyCode === "INR") {
            newOption.selected = "selected"
        }
        select.append(newOption);

    }
    select.addEventListener("change", (event) => {
        //   console.log("Targeted Value => ", event.target);
        updateCountryFlag(event.target);
    })
}

// Update the Country Flage Image.
const updateCountryFlag = (element) => {
    // console.log("Targeted Element here => ",element);
    let currencyCode = element.value;
    console.log("Exact Selected Element Here => ", currencyCode);
    let countryCode = countryList[currencyCode];
    console.log("countryCode => ", countryCode);
    let newFlagSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let image = element.parentElement.querySelector("img");
    image.src = newFlagSrc;
}

btn.addEventListener("click", async (event) => {
 event.preventDefault();
 let amount = document.querySelector(".amount input");
 console.log("Form Input value => ", amount);
 let amountVal = amount.value;
 console.log(amountVal);
 if(amountVal == "" || amountVal < 1){
    amountVal = 1;
    amount.value = "1";
 }

//  console.log("from and to currence => ",fromCurrency.value, toCurrency.value);
 const URL = `${BASE_URL}/${fromCurrency.value.toLowerCase()}/${toCurrency.value.toLowerCase()}.json`;
 console.log("API URL => ",URL);
 let response = await fetch(URL);
 console.log("response = ",response)
})

