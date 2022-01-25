//get values from webpage
function getValues() {
    //get values from the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;


    //validates user input as integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {

        //call generateNumber()    
        let numbers = generateNumbers(startValue, endValue);
        //call displayNumbers()

        displayNumbers(numbers);
    } else {
        //alert message to get corrective action and prevent error
        alert("Input not an Integer, enter correct value")
    }


}
//generate number from start value to end value
function generateNumbers(start, end) {
    let numbers = [];
    //populate a dynamic array from any two start and end values given by user
    for (let i = start; i <= end; i++) {
        numbers.push(i)
    }
    return numbers;
}

//display all numbers and even numbers in Bold
function displayNumbers(num) {
    let templateRows = "";
    for (let i = 0; i < num.length; i++) {
        let number = num[i];
        if(number % 2 == 0){
            templateRows += `<tr><td><strong>${number}</strong></td></tr>`;
        }
        else{
            templateRows += `<tr><td>${number}</td></tr>`;            
        }

    }
    document.getElementById("results").innerHTML = templateRows;
}