// multiple line comment is control+k+c

// document.getElementById("count-el").innerText = 5;

// function increment() {
//     console.log("Button was clocked")
// }

let count = 0;
let saveEl = document.getElementById("save-el");


function increment() {
    count +=  1;
    document.getElementById("count-el").textContent = count;
}


function save () {
    console.log(count);

    let numPrev = count + ' - ';
    saveEl.textContent += numPrev;
    count = 0;
    document.getElementById("count-el").textContent = count;

}



