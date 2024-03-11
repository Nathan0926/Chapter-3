/*    JavaScript 7th Edition
      Chapter 3
      Project 03-05

      Application to generate a horizontal bar chart
      Author: Nathan Harvey
      Date:    March 6

      Filename: project03-05.js
*/

// Array of phone models sold by the company (Fix: Use square brackets to declare arrays)
let phones = ["Photon 6E", "Photon 6X", "Photon 7E", "Photon 7X", "Photon 8P"];

let sales = [10281, 12255, 25718, 21403, 16142];

let totalSales = 0;

sales.forEach(addToTotal); // Fix: Correct the function name to addToTotal

for (let i = 0; i < phones.length; i++) { // Fix: Change the condition to i < phones.length

   let barChart = "";   // Variable to store HTML code for table cells used to create the bar chart

   let barPercent = (sales[i] / totalSales) * 100; // Fix: Correct the calculation

   let cellTag;   // Variable that will define the class of td elements used in creating the bar chart cells.

   switch (phones[i]) { // Fix: Add colon after each case statement
      case "Photon 6E": cellTag = "<td class='group1'>"; break;
      case "Photon 6X": cellTag = "<td class='group2'>"; break;
      case "Photon 7E": cellTag = "<td class='group3'>"; break;
      case "Photon 7X": cellTag = "<td class='group4'>"; break;
      case "Photon 8P": cellTag = "<td class='group5'>"; break;
   }

   barChart += "<tr><th>" + phones[i] + " (" + formatNumber(sales[i]) + ")</th>";

   for (let j = 0; j < barPercent; j++) { // Fix: Change the condition to j < barPercent
      barChart += cellTag + "</td>";
   }
   barChart += "</tr>";

   document.getElementsByTagName("tbody")[0].insertAdjacentHTML("beforeEnd", barChart); // Fix: Add [0] to access the first tbody element
}

function addToTotal(arrValue) {
   totalSales += arrValue;
}

function formatNumber(value) {
   return value.toLocaleString();
}
