let calc = document.querySelector(".calc");
let result = document.querySelector(".result");
let equal = document.querySelector(".equal");
let reset = document.querySelector(".clear");

// <Нажатие на кнопки>
calc.addEventListener("click", function(event,value=event.target.value) {
    var item = event.target.classList;
    if (item.contains("button") && !item.contains("equal") && !item.contains("clear")) {
        result.value += event.target.value;
    }
});
// </Нажатие на кнопки>

// <Нажатие на равно и обработка ошибок>
equal.addEventListener("click", function() {
    try {
        result.value = eval(result.value);
    } catch(e) {
        var currentValue = result.value;
        for(var item of calc.children) {
            item.disabled = true;
        }
        result.value = "Что-то пошло не так";
        
        setTimeout(() => {
            for(var item of calc.children) {
                item.disabled = false;
            }
            result.value = currentValue;
        },1500)
    }});
// </Нажатие на равно и обработка ошибок>

result.addEventListener("keypress", function(event) {
    event.preventDefault();
})

result.addEventListener("touch", function(event) {
    event.preventDefault();
})

reset.addEventListener("click",function() {
    result.value = "";
})