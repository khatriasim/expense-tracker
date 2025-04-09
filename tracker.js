let budget  = {}
let blocal = localStorage.getItem("budget")
if (blocal) {
    let getbudget = JSON.parse(blocal)
    console.log('loaded budget:', blocal);
    budget = getbudget
}



let transactions = []


let localdata = localStorage.getItem("transaction")
 
if (localdata) {
    transactions = JSON.parse(localdata)
    console.log('loaded transactions:', transactions);
    
}

let transactionTableBody = document.querySelector("#transactionTable tbody");

// Function to display transactions in the table
function showTransaction(transactions) {
    // Clear existing rows
    transactionTableBody.innerHTML = "";

    // Iterate through transactions array
    transactions.forEach(transaction => {
        // Create a new table row
        let row = document.createElement("tr");

        // Create and populate table data cells
        let dateCell = document.createElement("td");
        dateCell.textContent = transaction.date;
        row.appendChild(dateCell);

        let descriptionCell = document.createElement("td");
        descriptionCell.textContent = transaction.description;
        row.appendChild(descriptionCell);

        let categoryCell = document.createElement("td");
        categoryCell.textContent = transaction.category;
        row.appendChild(categoryCell);

        let amountCell = document.createElement("td");
        amountCell.textContent = transaction.amount;
        row.appendChild(amountCell);

        let currencyCell = document.createElement("td");
        currencyCell.textContent = transaction.currency;
        row.appendChild(currencyCell);

        // Append the row to the table body
        transactionTableBody.appendChild(row);

    });
}
showTransaction(transactions)



let category = document.getElementById("category")
let options = ["food", "veggies", "snacks", "choclates"]

options.forEach(optiontext => {
    let option = document.createElement("option")
    option.value = optiontext
    option.textContent = optiontext
    category.appendChild(option)
});

let categorybudget = document.getElementById("budgetCategory")
let budgetoptions = ["food", "veggies", "snacks", "choclates"]

budgetoptions.forEach(optiontext1 => {
    let newoption = document.createElement("option")
    newoption.value = optiontext1
    newoption.textContent = optiontext1
    budgetCategory.appendChild(newoption)
});

let currency = document.getElementById("currency")
let currencies = ["$", "Rs", "Pound", "Yen"]

currencies.forEach(curren1 => {
    let newoption = document.createElement("option")
    newoption.value = curren1
    newoption.textContent = curren1
    currency.appendChild(newoption)
});

let transaction = document.getElementById("transactionForm")
transaction.addEventListener("submit", (event) => {
    event.preventDefault()
    

    let amount = document.getElementById("amount")
    let tamount = amount.value

    let description = document.getElementById("description")
    let tdes = description.value
    
    let date = document.getElementById("date")
    let tdate = date.value
    
    let category = document.getElementById("category")
    let tcat = category.value
    
    let type = document.getElementById("type")
    let tvalue = type.value
    
    let currency = document.getElementById("currency")
    let tcur = currency.value
    
    let obj = {}
    
    obj.amount = tamount
    obj.description = tdes
    obj.date = tdate
    obj.category = tcat
    obj.type = tvalue
    obj.currency = tcur
    
    transactions.push(obj)
    
    localStorage.setItem("transaction", JSON.stringify(transactions))
    showTransaction(transactions)
})  

let setbudget = document.getElementById("budgetForm")

setbudget.addEventListener("submit", (event) => {
    event.preventDefault()

    let budgetCategory = document.getElementById("budgetCategory")
    let bcat = budgetCategory.value
    

    let budgetAmount = document.getElementById("budgetAmount")
    let bamount = budgetAmount.value

    let obj = {}
    obj.category = bcat
    obj.amount = bamount

    

    let bstorage = localStorage.setItem("budget", JSON.stringify(obj))


})