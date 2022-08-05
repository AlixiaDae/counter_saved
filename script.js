console.log("Hello");

let counter = 0;
let btn = document.getElementById("btn");
let disp = document.getElementById("counter");
document.getElementById("counter").innerHTML = localStorage.getItem("clicks"); 

//no need to touch counter, the important thing is to make innerHTML read the localStorage since it's the one that shows return in HTML
//make sure that localstorage value is shown in innerHTML
//innerHTML variable must be lower than initial holding variable for placeholder purposes(?)

btn.onclick = function () {
    if (localStorage.getItem("clicks")){
        counter = localStorage.getItem("clicks")
        counter++;
        disp.innerHTML = counter;
        localStorage.setItem("clicks",counter);
    } else {
    counter++;
    disp.innerHTML = counter;
    localStorage.setItem("clicks",counter)
    }
}

// set localStorage
//put counter value on localStorage

//check if localStorage has value, 
//if true, counter must get value from localstorage
//make sure to display result in innerHTML then save in setItem(value of setItem must be the right operand and not the innerHTML)


