let menuItems = document.getElementsByClassName("menuItem");

function calcTotal() {
    let orderTotal = 0;

    // Loop through menuItems collection
    for (let i = 0; i < menuItems.length; i++) {
        // Check if the item has been checked
        if (menuItems[i].checked) {
            // Increase orderTotal by the value of menuItems[i]
            orderTotal += Number(menuItems[i].value);
        }
    }

    document.getElementById("billTotal").innerHTML = formatCurrency(orderTotal);
}

for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener("click", calcTotal);
}

function formatCurrency(value) {
    return "$" + value.toFixed(2);
}
