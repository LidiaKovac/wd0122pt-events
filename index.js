const demoEvent = function(clickEvent) {
    console.log(document.querySelector("input[type='text']").value)
}

const demoKeyboard = function(keyboardEvent) {
    // console.log(keyboardEvent.key)
    if(keyboardEvent.key === "Enter") {
        console.log("complex logic to search for:",keyboardEvent.target.value)
    }
}


const colorDemo = function(changeEvent) {
    console.log("Color has changed")
    let chosenColor = changeEvent.target.value
    let h1 = document.querySelectorAll("h1") //first h1!
    for (let i = 0; i < h1.length; i++) {
        const single = h1[i];
        single.style.color = chosenColor
    }
}