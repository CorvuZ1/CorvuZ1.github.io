let calc = document.querySelector(".calc");
let result = document.querySelector(".result");
let equal = document.querySelector(".equal");

calc.addEventListener("click", function(event,value=event.target.value) {
    var item = event.target.classList;
    if (item.contains("button") && !item.contains("equal") && !item.contains("clear")) {
        result.value += event.target.value;
    }
})

equal.addEventListener("click", function() {
    try {
        result.value = eval(result.value)
    } catch(error) {
        result.value = error.message
    }
})

result.addEventListener("keypress", function(e) {
    e.preventDefault();
})