/* .js files add interaction to your website */
var factList = [
  "Some workers in garment factories are paid as little as $10 per week", /*0*/
  "The production of synthetic fabrics contributes to 10% of the world’s carbon emissions", /*1*/
  "Over 1.5 trillion liters of water are used a year to make clothing", /*2*/
  "Almost all fabrics create pollution", /*3*/
  "Synthetic fabrics are made of petrochemicals which can be manipulated to form many different textures of fabrics", /*4*/
  "The environmental effects also bring down the cost of fast fashion", /*5*/
  
]; 

// Declare the variables you'll need, including the HTML elements
var fact = document.getElementById ("fact");
var myButton = document.getElementById("myButton");
var count = 0;

// Add an event listener for "click"
myButton.addEventListener("click", displayFact);

// Create a function to display a fact when the button is clicked
function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length) {
    count = 0;
  }
}
