let coin = document.querySelector(".coin");
let btnInput = document.querySelector(".button-input");
let btnProgress = document.querySelector(".button-progress");
let flipCounter = document.querySelector(".flip-counter");
let resultName = document.querySelector(".coin-info");
let coinSides = {
    front: {
        name: "Решка",
        path: "../images/frontSide.gif"
    },

    back: {
        name: "Орёл",
        path: "../images/backSide.gif"
    }
};

// <Статистика монетки и проверка на наличие локальной информации>
let frontStat = document.querySelector("#front-all");
let backStat = document.querySelector("#back-all");
let allStat = document.querySelector("#all");
let reset = document.querySelector(".reset");

    reset.addEventListener("click", function() {
        localStorage.clear("frontStatNum");
        localStorage.clear("backStatNum");
        localStorage.clear("allStatNum");
        
        window.location.reload();
    })

    if (!localStorage.getItem("frontStatNum") &&
        !localStorage.getItem("backStatNum") &&
        !localStorage.getItem("allStatNum")) {
        
        let frontStatNum = 0;
            localStorage.setItem("frontStatNum", JSON.stringify(frontStatNum))
        let backStatNum = 0;
            localStorage.setItem("backStatNum", JSON.stringify(backStatNum))
        let allStatNum = 0;
            localStorage.setItem("allStatNum", JSON.stringify(allStatNum))
    } 

    else {
        frontStat.textContent = localStorage.getItem("frontStatNum");
        backStat.textContent = localStorage.getItem("backStatNum");
        allStat.textContent = localStorage.getItem("allStatNum");
    }
// </Статистика монетки и проверка на наличие локальной информации>

btnInput.onclick = () => {
    coin.style.marginBottom = "15px";
    
    setTimeout(() => {
        if (Math.ceil(Math.random() * 2) === 1) {
            let getAgainFront = JSON.parse(localStorage.getItem("frontStatNum"))+1;
            localStorage.setItem("frontStatNum",JSON.stringify(getAgainFront));
            frontStat.textContent = getAgainFront;
            coin.src = coinSides.front.path;
            resultName.textContent = coinSides.front.name;
        } else {
            let getAgainBack = JSON.parse(localStorage.getItem("backStatNum"))+1;
            localStorage.setItem("backStatNum",JSON.stringify(getAgainBack));
            backStat.textContent = getAgainBack;
            coin.src = coinSides.back.path;
            resultName.textContent = coinSides.back.name;
        }
        
        let getAgainAll = JSON.parse(localStorage.getItem("allStatNum"))+1;
        localStorage.setItem("allStatNum",JSON.stringify(getAgainAll));
        allStat.textContent = getAgainAll;
        
    },750)

    btnInput.disabled = true;

    let turn = 0;
    let progress = 0;
    let progressInterval = setInterval(() => {
        progress += 1;
        btnProgress.style.width = `${progress}px`;

        // <Эффект подбрасывания>
        if (coin.src.endsWith("frontSide.gif") || coin.src.endsWith("backSide.gif") ) {
            coin.style.transform = `rotateY(${turn += 4.8}deg)`;
        }
        // </Эффект подбрасывания>

        if (progress == 150) {
            clearInterval(progressInterval);
            btnInput.disabled = false;
            btnProgress.style.width = "0px"
        }
    }, 5)
}